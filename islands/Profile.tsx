/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import {
  HandlerContext,
  PageProps,
} from "https://deno.land/x/fresh@1.0.2/server.ts";
import { getSessionId } from "../utils/postgres.ts";
import * as cookie from "https://deno.land/std/http/cookie.ts";

const Profile = (props: any) => {
  const name = props.user?.name;

  if (name) {
    return (
      <div class={tw`text-gray-700`}>
        <i>You are logged in as {name}</i>{"    "}|{"   "}
        <i>
          <a
            href="logout"
            class={tw`no-underline  hover:underline text-blue-700`}
          >
            log out
          </a>
        </i>
      </div>
    );
  }

  return (
    <a
      href="/signin"
      class={tw`no-underline  hover:underline text-blue-700`}
      // Width 100% needed for safari
      style={{ textAlign: "right", width: "100%" }}
    >
      Sign in
    </a>
  );
};

export default Profile;
