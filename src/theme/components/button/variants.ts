import chakraTheme from "@chakra-ui/theme";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

import { getColorSchemeHex } from "@/theme/utils";
import { CSS_VAR_PREFIX } from "@/theme/constants";

export const solidVariant = (props: StyleFunctionProps) => {
  const { colorMode, colorScheme } = props;

  return {
    ...chakraTheme.components.Button.variants?.solid(props),
    color: colorMode === "light" ? "white" : "black",
    bg: getColorSchemeHex(colorMode, colorScheme),
  };
};

export const outlineVariant = (props: StyleFunctionProps) => {
  const { colorMode, colorScheme } = props;

  return {
    ...chakraTheme.components.Button.variants?.outline(props),
    color: getColorSchemeHex(colorMode, colorScheme),
    borderWidth: "2px",
  };
};

export const linkVariant = (props: StyleFunctionProps) => {
  const { colorMode, colorScheme } = props;

  return {
    ...chakraTheme.components.Button.variants?.link(props),
    textDecoration: "underline",
    color: getColorSchemeHex(colorMode, colorScheme),
    justifyContent: "space-between",
  };
};

export const solidGlowVariant = (props: StyleFunctionProps) => {
  const { colorScheme } = props;

  return {
    ...solidVariant(props),
    boxShadow: `0px 0px 8px var(--${CSS_VAR_PREFIX}-colors-${colorScheme
      .split(".")
      .join("-")}-500)`,
  };
};

export const outlineGlowVariant = (props: StyleFunctionProps) => {
  const { colorScheme } = props;

  return {
    ...outlineVariant(props),
    boxShadow: `0px 0px 8px var(--${CSS_VAR_PREFIX}-colors-${colorScheme
      .split(".")
      .join("-")}-500)`,
  };
};

export const linkGlowVariant = (props: StyleFunctionProps) => {
  const { colorScheme } = props;

  return {
    ...linkVariant(props),
    boxShadow: `0px 0px 8px var(--${CSS_VAR_PREFIX}-colors-${colorScheme
      .split(".")
      .join("-")}-500)`,
  };
};
