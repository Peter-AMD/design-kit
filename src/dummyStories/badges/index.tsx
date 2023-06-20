import { CloseIcon } from "@chakra-ui/icons";
import { Button, Grid } from "@chakra-ui/react";

const DummyBadges = () => {
  return (
    <Grid gap="3">
      <Button
        variant={"solid"}
        rightIcon={<CloseIcon w={3} h={3} />}
        leftIcon={<CloseIcon w={3} h={3} />}
        colorScheme="scheme.brand.primary"
        size={"badgeLarge"}
      >
        Large
      </Button>
      <Button
        variant={"solid"}
        rightIcon={<CloseIcon w={3} h={3} />}
        leftIcon={<CloseIcon w={3} h={3} />}
        colorScheme="scheme.brand.primary"
        size={"badgeMedium"}
      >
        Medium
      </Button>
      <Button
        variant={"solid"}
        rightIcon={<CloseIcon w={3} h={3} />}
        leftIcon={<CloseIcon w={3} h={3} />}
        colorScheme="scheme.brand.primary"
        size={"badgeSmall"}
      >
        Small
      </Button>
    </Grid>
  );
};

export default DummyBadges;
