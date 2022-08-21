import { HandlerContext } from "$fresh/server.ts";
import * as cookie from "https://deno.land/std@0.152.0/http/cookie.ts";

import { createSession } from "../../utils/postgres.ts";

export const handler = async (
  req: Request,
  ctx: HandlerContext,
): Promise<Response> => {
  if (req.method !== "POST") {
    throw new Error();
  }

  const { email, name } = await req.json();

  if (!email || !name) {
    throw new Error();
  }

  const token = await createSession(email, name);

  const headers = new Headers();
  if (token) {
    cookie.setCookie(headers, {
      name: "wedding_session",
      value: token,
      httpOnly: true,
      secure: true,
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
    });
  }
  return new Response(`Ok, ${email}, ${name}`, { headers });
};
