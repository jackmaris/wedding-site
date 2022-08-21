import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import * as colors from "twind/colors";

export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      blue: colors.sky,
      green: colors.emerald,
      gray: colors.coolGray,
    },
  },
  preflight: {
    h2: {
      fontSize: "1.5em",
      fontWeight: "bold",
    },
    h1: {
      fontSize: "2em",
      fontWeight: "bold",
    },
    a: {
      class: "no-underline hover:underline text-blue-700",
    },
    p: {
      margin: "1em 0 1em 0",
    },
    ul: {
      margin: "0.25em 0 0.25em 0",
    },
  },
};
if (IS_BROWSER) setup(config);
