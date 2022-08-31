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

const RSVP = (props: PageProps) => {
  return (
    <div>
      <img
        referrerpolicy="no-referrer"
        src={"https://drive.google.com/uc?export=view&id=1xXAKsuzdSWwCHu1IKx2YBK4AqxPwotS3"}
      />
      <img
        referrerpolicy="no-referrer"
        src={"https://drive.google.com/uc?export=view&id=1Dv9mq5jSl_S0glrdc4jiCb3eIlcdBpAq"}
      />
    </div>
  );
};

export default withContainer(RSVP);
