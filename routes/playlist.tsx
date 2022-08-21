/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import withContainer from "../components/withContainer.tsx";
import { getUser } from "../utils/postgres.ts";
import { HandlerContext } from "https://deno.land/x/fresh@1.0.2/server.ts";

export const handler = async (req: Request, ctx: HandlerContext) => {
  const user = await getUser(req);
  return ctx.render({ user });
};

const Playlist = () => {
  return (
    <div class={tw`my-4`}>
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/161kMpriC94xmkqbuCfN3V?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allowFullScreen={"" as any}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      >
      </iframe>
    </div>
  );
};

export default withContainer(Playlist);
