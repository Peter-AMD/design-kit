import { extendTheme } from "@chakra-ui/react";

import components from "./components";
import defaultTheme from "./default";

const theme = extendTheme({ ...defaultTheme, components });

export default theme;
