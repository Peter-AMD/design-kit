import borderRadius from "./borderRadius";
import breakpoints from "./breakpoints";
import colors from "./colors";
import config from "./config";
import semanticTokens from "./semanticTokens";
import sizes from "./sizes";
import spacing from "./spacing";
import typography from "./typography";
import zIndex from "./zIndex";

const defaultTheme = {
  ...borderRadius,
  ...breakpoints,
  ...colors,
  ...config,
  ...semanticTokens,
  ...sizes,
  ...spacing,
  ...typography,
  ...zIndex,
};

export default defaultTheme;
