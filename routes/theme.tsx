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

export const handler = async (req: Request, ctx: HandlerContext) => {
  const user = await getUser(req);
  return ctx.render({ user });
};

const Theme = (props: PageProps<{ session?: string }>) => {
  return (
    <div>
      <h2>
        Theme!
      </h2>
      <p>Dress in _____</p>
    </div>
  );
};

export default withContainer(Theme);
