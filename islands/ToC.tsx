/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import withContainer from "../components/withContainer.tsx";
import { HandlerContext } from "https://deno.land/x/fresh@1.0.2/server.ts";

export const handler = (req: Request, ctx: HandlerContext) => {
  return ctx.render();
};

const ToC = () => {
  return (
    <div
      style={{
        // display: "flex",
        flex: "1 0 auto",
        display: "-webkit-flex",

        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <a
        href="/itinerary"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        📋 Itinerary
      </a>
      <a
        href="/playlist"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        🎵 Spotify
      </a>

      <a
        href="/registry"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        🎁 Registry
      </a>

      <a
        href="/rsvp"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        🆗 RSVP
      </a>

      <a
        href="/travel"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        ✈️ Travel
      </a>

      <a
        href="/theme"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        🎨 Theme
      </a>

      <a
        href="/hotel"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        🏨 Hotel
      </a>
      <a
        href="/food"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        🍽 Food and Drinks
      </a>
      <a
        href="/pictures"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        📸 Pictures
      </a>

      <a
        href="/contact"
        class={tw`no-underline  hover:underline text-blue-700 my-1`}
      >
        🥸 Contact Us
      </a>
    </div>
  );
};

export default ToC;
