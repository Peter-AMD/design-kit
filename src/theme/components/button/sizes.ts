import { CSS_VAR_PREFIX } from "@/theme/constants";

export const extraSize = {
  px: `var(--${CSS_VAR_PREFIX}-space-6)`,
  py: `var(--${CSS_VAR_PREFIX}-space-5)`,
  width: "159px",
};

export const largeSize = {
  px: `var(--${CSS_VAR_PREFIX}-space-5)`,
  py: `var(--${CSS_VAR_PREFIX}-space-4)`,
  width: "135px",
};

export const mediumSize = {
  px: `var(--${CSS_VAR_PREFIX}-space-5)`,
  py: `var(--${CSS_VAR_PREFIX}-space-3)`,
  width: "127px",
};

export const smallSize = {
  px: `var(--${CSS_VAR_PREFIX}-space-4)`,
  py: `var(--${CSS_VAR_PREFIX}-space-3)`,
  width: "115px",
};

export const extraSmallSize = {
  px: `var(--${CSS_VAR_PREFIX}-space-3)`,
  py: `var(--${CSS_VAR_PREFIX}-space-1)`,
  width: "103px",
};

export const badgeLargeSize = {
  width: "101px",
  py: `var(--${CSS_VAR_PREFIX}-space-3)`,
  fontSize: "body",
};

export const badgeMediumSize = {
  width: "96px",
  py: `var(--${CSS_VAR_PREFIX}-space-2)`,
  fontSize: "label",
};

export const badgeSmallSize = {
  width: "74px",
  py: `var(--${CSS_VAR_PREFIX}-space-1)`,
  fontSize: "caption",
  ".chakra-icon": {
    with: "8px",
    height: "8px",
  },
  ".chakra-button__icon": {
    "&:first-of-type": {
      marginInlineEnd: "6px",
    },
    "&:last-of-type": {
      marginInlineStart: "6px",
    },
  },
};