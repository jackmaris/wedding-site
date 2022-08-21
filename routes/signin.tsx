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
  const url = new URL(req.url);
  const email = url.searchParams.get("email");
  const name = url.searchParams.get("name");

  if (!email || !name) {
    return ctx.render();
  }

  const token = await createSession(email, name);

  const headers = new Headers();
  if (token) {
    cookie.setCookie(headers, {
      name: "wedding_session",
      value: token,
      secure: true,
      maxAge: 3600,
      domain: "deno.dev",
      expires: new Date(Date.UTC(2024, 1, 1, 1, 1)),
      sameSite: "None",
    });
  }

  headers.append("location", "/rsvp");

  return new Response(undefined, {
    status: Status.Found,
    headers,
  });
};

const SignIn = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form
      style={{ maxWidth: "400px", textAlign: "center", margin: "auto" }}
      onSubmit={onSubmit}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 5fr",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <div>
          Email:
        </div>
        <input type="text" name="email" />

        <div>
          Name:
        </div>
        <input type="text" name="name" />

        <div>Password:</div>
        <input type="password" name="password" />
      </div>
      <button
        type="submit"
        style={{ fontWeight: "bold" }}
        class={tw`hover:bg-blue-100 bg-green-300 px-2 rounded-md`}
      >
        Sign In ➡️
      </button>
    </form>
  );
};

export default withContainer(SignIn);
