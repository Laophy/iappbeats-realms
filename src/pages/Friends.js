import React from "react";
import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Avatar,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { FiSearch, FiUserPlus, FiMessageSquare } from "react-icons/fi";

export function Friends() {
  const bg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  const FriendItem = ({ name, status, lastSeen }) => (
    <Box
      p={4}
      borderRadius="lg"
      _hover={{ bg: hoverBg }}
      transition="background 0.2s"
    >
      <HStack justify="space-between">
        <HStack spacing={4}>
          <Avatar name={name} size="md" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">{name}</Text>
            <Text
              fontSize="sm"
              color={status === "Online" ? "green.400" : "gray.500"}
            >
              {status === "Online" ? "Online" : `Last seen ${lastSeen}`}
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Button size="sm" leftIcon={<FiMessageSquare />}>
            Message
          </Button>
        </HStack>
      </HStack>
    </Box>
  );

  return (
    <Container maxW="container.xl" py={8}>
      <Box bg={bg} borderRadius="xl" p={8}>
        <VStack spacing={6} align="stretch">
          <HStack justify="space-between">
            <Heading size="lg">Friends</Heading>
            <Button leftIcon={<FiUserPlus />} colorScheme="blue">
              Add Friend
            </Button>
          </HStack>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search friends..." />
          </InputGroup>

          <Tabs>
            <TabList>
              <Tab>All Friends</Tab>
              <Tab>Online</Tab>
              <Tab>Pending</Tab>
            </TabList>

            <TabPanels>
              <TabPanel px={0}>
                <VStack spacing={2} align="stretch">
                  <FriendItem name="Alex Smith" status="Online" />
                  <FriendItem
                    name="Sarah Johnson"
                    status="Offline"
                    lastSeen="2 hours ago"
                  />
                  <FriendItem name="Mike Brown" status="Online" />
                  <FriendItem
                    name="Emma Wilson"
                    status="Offline"
                    lastSeen="1 day ago"
                  />
                </VStack>
              </TabPanel>
              <TabPanel px={0}>
                <VStack spacing={2} align="stretch">
                  <FriendItem name="Alex Smith" status="Online" />
                  <FriendItem name="Mike Brown" status="Online" />
                </VStack>
              </TabPanel>
              <TabPanel px={0}>
                <Text>No pending friend requests</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>
    </Container>
  );
}
