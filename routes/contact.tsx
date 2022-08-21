/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";

import * as cookie from "https://deno.land/std/http/cookie.ts";
import {
  HandlerContext,
  PageProps,
} from "https://deno.land/x/fresh@1.0.2/server.ts";
import { getUser } from "../utils/postgres.ts";
import withContainer from "../components/withContainer.tsx";

// deno-lint-ignore require-await
export const handler = async (req: Request, ctx: HandlerContext) => {
  const user = await getUser(req);

  return ctx.render({ user });
};

const Contact = (props: PageProps) => {
  return (
    <div style={{ paddingTop: "12px" }}>
      <h1 class={tw`mv-1`}>Contact Info</h1>
      <h2 class={tw`mv-1`}>Jack</h2>
      <ul>
        <b>Email:</b>{" "}
        <a
          href="mailto:jack.maris@gmail.com"
          class={tw`no-underline  hover:underline text-blue-700 my-1`}
          target="_blank"
        >
          jack.maris@gmail.com
        </a>
      </ul>
      <ul>
        <b>Instagram:</b>{" "}
        <a
          href="https://www.instagram.com/jack.maris/"
          class={tw`no-underline  hover:underline text-blue-700 my-1`}
          target="_blank"
        >
          @jack.maris
        </a>
      </ul>

      <h2 class={tw`mv-1`}>Angela</h2>
      <ul>
        <b>Email:</b>{" "}
        <a
          href="mailto:sl4525@columbia.edu"
          class={tw`no-underline  hover:underline text-blue-700 my-1`}
          target="_blank"
        >
          sl4525@columbia.edu
        </a>
      </ul>
      <ul>
        <b>Instagram:</b>{" "}
        <a
          href="https://www.instagram.com/kidnap_n_chill/"
          class={tw`no-underline  hover:underline text-blue-700 my-1`}
          target="_blank"
        >
          @kidnap_n_chill
        </a>
      </ul>
    </div>
  );
};

export default withContainer(Contact);
