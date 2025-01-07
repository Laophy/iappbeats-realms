import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FiMenu,
  FiHome,
  FiSettings,
  FiUser,
  FiUsers,
  FiMessageSquare,
  FiEdit,
  FiMonitor,
  FiInfo,
  FiBook,
  FiPlay,
  FiGrid,
} from "react-icons/fi";
import Logo from "../images/iAppbeats_Logo_2.png";

const NavItem = ({ icon, children, to }) => {
  const hoverBg = useColorModeValue("blue.50", "blue.800");
  const activeColor = useColorModeValue("blue.600", "blue.200");

  return (
    <RouterLink to={to} style={{ width: "100%" }}>
      <HStack
        align="center"
        p="3"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: hoverBg,
          color: activeColor,
        }}
        transition="all 0.2s"
      >
        {icon && <Box fontSize="18">{icon}</Box>}
        <Text fontSize="md">{children}</Text>
      </HStack>
    </RouterLink>
  );
};

export function Navigation({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const sidebarWidth = "240px";

  return (
    <Box minH="100vh">
      {/* Mobile Header */}
      <Flex
        as="header"
        position="fixed"
        w="full"
        height="16"
        align="center"
        px="4"
        bg={bg}
        borderBottomWidth="1px"
        borderColor={borderColor}
        display={{ base: "flex", md: "none" }}
        zIndex="1000"
      >
        <IconButton
          aria-label="Menu"
          icon={<FiMenu />}
          onClick={onOpen}
          variant="ghost"
          size="lg"
        />
        <Image src={Logo} h="8" ml="4" />
      </Flex>

      {/* Desktop Sidebar */}
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg={bg}
        borderRight="1px"
        borderRightColor={borderColor}
        w={sidebarWidth}
        display={{ base: "none", md: "block" }}
      >
        <Flex h="16" alignItems="center" mx="4">
          <Image src={Logo} h="8" />
        </Flex>
        <SidebarContent />
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader borderBottomWidth="1px">
            <Image src={Logo} h="8" />
          </DrawerHeader>
          <DrawerBody p="0">
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box ml={{ base: 0, md: sidebarWidth }} pt={{ base: "16", md: "0" }}>
        <Box p="4">{children}</Box>
      </Box>
    </Box>
  );
}

// Separate component for sidebar content to avoid duplication
const SidebarContent = () => {
  const sectionBg = useColorModeValue("gray.50", "gray.900");

  return (
    <VStack spacing="1" align="stretch">
      <Box py="2">
        <NavItem icon={<FiHome />} to="/">
          Home
        </NavItem>
        <NavItem icon={<FiMonitor />} to="/games">
          Games
        </NavItem>
        <NavItem icon={<FiPlay />} to="/animations">
          Animations
        </NavItem>
      </Box>

      <Box bg={sectionBg} py="2">
        <Text
          px="4"
          fontSize="xs"
          fontWeight="bold"
          textTransform="uppercase"
          mb="2"
          opacity="0.7"
        >
          Development
        </Text>
        <NavItem icon={<FiInfo />} to="/about">
          About
        </NavItem>
        <NavItem icon={<FiBook />} to="/docs">
          Documentation
        </NavItem>
      </Box>

      <Box py="2">
        <Text
          px="4"
          fontSize="xs"
          fontWeight="bold"
          textTransform="uppercase"
          mb="2"
          opacity="0.7"
        >
          Social
        </Text>
        <NavItem icon={<FiUsers />} to="/friends">
          Friends
        </NavItem>
        <NavItem icon={<FiMessageSquare />} to="/messages">
          Messages
        </NavItem>
        <NavItem icon={<FiUsers />} to="/clans">
          Clans
        </NavItem>
        <NavItem icon={<FiEdit />} to="/createworld">
          Create World
        </NavItem>
      </Box>

      <Box bg={sectionBg} py="2">
        <Text
          px="4"
          fontSize="xs"
          fontWeight="bold"
          textTransform="uppercase"
          mb="2"
          opacity="0.7"
        >
          Account
        </Text>
        <NavItem icon={<FiUser />} to="/account">
          Profile
        </NavItem>
        <NavItem icon={<FiSettings />} to="/settings">
          Settings
        </NavItem>
      </Box>
    </VStack>
  );
};
