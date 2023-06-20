import { ComponentStyleConfig } from "@chakra-ui/react";

import {
  solidVariant,
  outlineVariant,
  linkVariant,
  solidGlowVariant,
  outlineGlowVariant,
  linkGlowVariant,
} from "./variants";
import {
  extraSize,
  largeSize,
  mediumSize,
  smallSize,
  extraSmallSize,
  badgeLargeSize,
  badgeMediumSize,
  badgeSmallSize,
} from "./sizes";

const ButtonComponentStyle: ComponentStyleConfig = {
  baseStyle: (styleFnProps) => {
    const { theme } = styleFnProps;

    return {
      borderRadius: theme.radii["8"],
      fontWeight: "medium",
    };
  },
  sizes: {
    extra: extraSize,
    large: largeSize,
    medium: mediumSize,
    small: smallSize,
    extraSmall: extraSmallSize,
    badgeLarge: badgeLargeSize,
    badgeMedium: badgeMediumSize,
    badgeSmall: badgeSmallSize,
  },
  variants: {
    solid: solidVariant,
    outline: outlineVariant,
    link: linkVariant,
    solidGlow: solidGlowVariant,
    outlineGlow: outlineGlowVariant,
    linkGlow: linkGlowVariant,
  },
  defaultProps: {
    variant: "solid",
    size: "large",
  },
};

export default ButtonComponentStyle;
