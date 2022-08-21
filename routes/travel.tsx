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

  const cookies = cookie.getCookies(req.headers);

  const session = cookies["wedding_session"];

  return ctx.render({ session, user });
};

const Travel = (props: PageProps<{ session?: string }>) => {
  return (
    <div>
      <h2 class={tw`mb-1`}>
        How to get there
      </h2>

      <p class={tw`my-6`}>
        The wedding will be at the Breakers Hotel in Spring Lake, NJ.
      </p>

      <p class={tw`my-6`}>
        If you're flying in, we recommend getting in at Newark Airport.
      </p>

      <p class={tw`my-6`}>
        If you're coming in from New York City, the easiest solution might be to
        take the{" "}
        <a
          href="https://seastreak.com/ferry-routes-and-schedules/between-new-jersey-and-new-york-city/"
          target="_blank"
        >
          Seastreak Ferry
        </a>{" "}
        from downtown Manhattan to Highlands, NJ, and getting a rideshare from
        there.

        <p class={tw`my-6`}>
          <a href="mailto:jack.maris@gmail.com" target="_blank">Email us</a>
          {" "}
          if you'd like to coordinate a rideshare to/from the Seastreak with
          other guests.
        </p>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.4163129138033!2d-74.02410018415854!3d40.155283679396305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1880580da0be7%3A0x1e2b02491a23c900!2sThe%20Breakers%20on%20the%20Ocean!5e0!3m2!1sen!2sus!4v1661120194233!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border:0; margin-top: 10px"
        allowFullScreen={"" as any}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  );
};

export default withContainer(Travel);
