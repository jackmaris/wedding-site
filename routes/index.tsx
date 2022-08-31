/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { useEffect } from "preact/hooks";
import withContainer from "../components/withContainer.tsx";
import ToC from "../islands/ToC.tsx";
import { HandlerContext } from "https://deno.land/x/fresh@1.0.2/server.ts";
import { getUser } from "../utils/postgres.ts";

// deno-lint-ignore require-await
export const handler = async (req: Request, ctx: HandlerContext) => {
  const user = await getUser(req);
  return ctx.render({ user });
};

const Home: preact.FunctionalComponent = () => {
  return (
    <Fragment>
      <p class={tw`my-6`}>
        Jack and Angela are getting married! wow
      </p>
      <ToC />
    </Fragment>
  );
};

const X = () => {
  return (
    <meta
      http-equiv="Refresh"
      content="0; url='https://www.zola.com/wedding/jackandangelajanuary14'"
    />
  );
};

export default X;
