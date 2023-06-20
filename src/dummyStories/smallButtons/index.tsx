import { ArrowForwardIcon, SpinnerIcon } from "@chakra-ui/icons";
import { Flex, Grid, IconButton } from "@chakra-ui/react";

const DummySmallButtons = () => {
  return (
    <Flex gap="3">
      <IconButton
        size="sm"
        colorScheme="scheme.brand.primary"
        aria-label="arrow icon"
        icon={<ArrowForwardIcon />}
      />

      <IconButton
        size="sm"
        colorScheme="scheme.brand.primary"
        aria-label="arrow icon"
        icon={<SpinnerIcon />}
      />
    </Flex>
  );
};

export default DummySmallButtons;
