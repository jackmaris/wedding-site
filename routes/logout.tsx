/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import withContainer from "../components/withContainer.tsx";
import {
  HandlerContext,
  Handlers,
  Status,
} from "https://deno.land/x/fresh@1.0.2/server.ts";
import { createSession } from "../utils/postgres.ts";
import * as cookie from "https://deno.land/std@0.152.0/http/cookie.ts";

export const handler = async (req: Request, ctx: HandlerContext) => {
  const headers = new Headers();
  cookie.deleteCookie(headers, "wedding_session");

  headers.append("location", "/");

  return new Response(undefined, {
    status: Status.Found,
    headers,
  });
};

const Logout = () => {
  return <div>Logging you out...</div>;
};

export default withContainer(Logout);
