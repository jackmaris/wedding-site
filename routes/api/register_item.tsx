import { HandlerContext } from "$fresh/server.ts";
import * as cookie from "https://deno.land/std@0.152.0/http/cookie.ts";
import { getUser } from "../../utils/postgres.ts";
import { registerRow } from "../registry.tsx";

export const handler = async (
  req: Request,
  ctx: HandlerContext,
): Promise<Response> => {
  if (req.method !== "POST") {
    throw new Error();
  }

  const { item_id } = await req.json();

  if (!item_id) {
    throw new Error();
  }

  const user = await getUser(req);

  console.log(`my user`, user);
  if (!user) {
    throw new Error();
  }

  await registerRow(user);

  return new Response(`Ok, ${item_id}`);
};
