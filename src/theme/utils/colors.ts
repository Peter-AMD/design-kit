export const getColorSchemeHex = (
  colorMode: "light" | "dark",
  colorScheme: string
) => {
  return colorMode === "light" ? `${colorScheme}.500` : `${colorScheme}.350`;
};
