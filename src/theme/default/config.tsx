import { type ThemeConfig } from "@chakra-ui/react";
import { CSS_VAR_PREFIX } from "@/theme/constants";

// if using SSR, please refer to,
// https://chakra-ui.com/docs/styled-system/color-mode#add-colormodemanager-optional-for-ssr
// for setup on color mode
const defaultConfig = {
  config: {
    cssVarPrefix: CSS_VAR_PREFIX,
    initialColorMode: "system",
    useSystemColorMode: false,
  } as ThemeConfig,
};

export default defaultConfig;
