import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";

type RowData = {
  id: string;
  name: string;
};

// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);

// Connect to the database
const connection = await pool.connect();

export const getRegistryRows = async (): Promise<RowData[]> => {
  const { rows } = await connection.queryObject`
  select * from registry
  `;

  console.log(`got here!`, rows);
  return rows as RowData[];
};
