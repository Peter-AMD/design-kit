import {
  Box,
  Heading,
  IconButton,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import DummyButtons from "./buttons";
import DummyBadges from "./badges";
import DummySmallButtons from "./smallButtons";
import DummySocialButtons from "./socialButtons";
import DummyBreadCrumbs from "./breadcrumbs";
import DummyChip from "./chip";
import DummyDropdown from "./dropdown";

// Please don't make this component as a guide to setting up your stories.
// Refer to Chakra theming for editing of base styles, variants, sizes.
const DummyStories = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const ColorModeIcon = colorMode === "light" ? SunIcon : MoonIcon;
  return (
    <Box className="dummy-stories-component" w="full" h="90vh">
      <IconButton
        variant={"outline"}
        colorScheme="cyan"
        aria-label="Color Mode"
        size="sm"
        icon={<ColorModeIcon />}
        onClick={toggleColorMode}
        position="fixed"
        right="6px"
      />
      <Box as="section" className="menu">
        <Heading as="h2" size="xl" noOfLines={1}>
          Components
        </Heading>
        <Tabs position="relative" variant="unstyled" orientation="vertical">
          <TabList aria-orientation="vertical" bgColor={"gray"}>
            <Tab>Buttons</Tab>
            <Tab>Badges</Tab>
            <Tab>Small Buttons</Tab>
            <Tab>Social Buttons</Tab>
            <Tab>Breadcrumbs</Tab>
            <Tab>Chip</Tab>
            <Tab>Dropdown</Tab>
          </TabList>
          <TabIndicator
            mt={0}
            height="2px"
            bg="white"
            borderRadius="1px"
            width="6px"
            left="1.5px"
          />
          <TabPanels>
            <TabPanel>
              <Box
                className="first-row"
                display="flex"
                flexDirection="column"
                w="159px"
                gap="4"
                alignItems="center"
              >
                <DummyButtons />
              </Box>
            </TabPanel>
            <TabPanel>
              <DummyBadges />
            </TabPanel>
            <TabPanel>
              <DummySmallButtons />
            </TabPanel>
            <TabPanel>
              <DummySocialButtons />
            </TabPanel>
            <TabPanel>
              <DummyBreadCrumbs />
            </TabPanel>
            <TabPanel>
              <DummyChip />
            </TabPanel>
            <TabPanel>
              <DummyDropdown />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default DummyStories;
