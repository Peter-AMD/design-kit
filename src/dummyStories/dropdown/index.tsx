import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const DummyDropdown = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
        rightIcon={<ChevronDownIcon boxSize={"30px"} />}
        leftIcon={<ChevronDownIcon boxSize={"30px"} />}
        colorScheme="scheme.brand.primary"
        width={"311px"}
        variant="outline"
      >
        <span style={{ textAlign: "left", width: "100%", display: "block" }}>
          File
        </span>
      </MenuButton>
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuDivider />
        <MenuItem>Open...</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DummyDropdown;
