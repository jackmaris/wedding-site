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
};
if (IS_BROWSER) setup(config);
