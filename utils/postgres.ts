import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as cookie from "https://deno.land/std/http/cookie.ts";

// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 10, true);

// Connect to the database
export const connection = await pool.connect();

/**
 create table wedding_user ( id UUID NOT NULL DEFAULT uuid_generate_v4() primary key,  name varchar(100) not null unique, email varchar(100) not null unique);

 create table site_session ( id UUID NOT NULL DEFAULT uuid_generate_v4(),
   wedding_user_id UUID NOT NULL DEFAULT uuid_generate_v4() references wedding_user (id)
 );

 */

export type UserRow = {
  site_id: string;
  user_id: string;
  name: string;
  email: string;
};

export type RegistryRow = {
  id: string;
  cost: number;
  link: string;
  description: string;
  name: string;
  wedding_user?: UserRow;
};

export const getUser = async (req: Request) => {
  const cookies = cookie.getCookies(req.headers);

  const session = cookies["wedding_session"];

  if (!session) {
    return;
  }

  const me = await getSessionId(session);
  return me as UserRow | undefined;
};

export const getSessionId = async (
  session_token: string,
): Promise<UserRow | undefined> => {
  const { rows } = await connection.queryObject`
    select ss.id as site_id, wu.id as user_id, wu.name, wu.email from site_session ss join wedding_user wu on ss.wedding_user_id = wu.id where ss.id = ${session_token}
  `;

  return rows[0] as UserRow | undefined;
};

export const createSession = async (email: string, name: string) => {
  await connection.queryObject`
    insert into wedding_user(email, name) values(${email}, ${name}) on conflict (email) DO NOTHING
  `;

  const { rows } = await connection.queryObject`
    select * from wedding_user where email = ${email}
  `;

  const user = rows[0] as UserRow | undefined;

  if (!user) {
    return;
  }

  const response = await connection.queryObject<{ id?: string }>(
    `insert into site_session (wedding_user_id)
      values ($1)
      returning id
    `,
    [user.id as any],
  );

  return response.rows[0]?.id;
};
