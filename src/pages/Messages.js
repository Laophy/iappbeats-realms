import React from "react";
import {
  Container,
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Divider,
  useColorModeValue,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FiSearch, FiSend, FiMoreVertical } from "react-icons/fi";

export function Messages() {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("gray.50", "gray.700");
  const activeBg = useColorModeValue("blue.50", "gray.700");
  const messageBubbleBg = useColorModeValue("gray.100", "gray.700");

  const ChatItem = ({ name, message, time, isActive, unread }) => (
    <HStack
      p={4}
      cursor="pointer"
      bg={isActive ? activeBg : "transparent"}
      _hover={{ bg: hoverBg }}
      transition="background 0.2s"
      borderRadius="lg"
    >
      <Avatar name={name} size="md" />
      <Box flex={1}>
        <HStack justify="space-between">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="xs" color="gray.500">
            {time}
          </Text>
        </HStack>
        <Text fontSize="sm" noOfLines={1} color="gray.500">
          {message}
        </Text>
      </Box>
      {unread && <Box bg="blue.500" w={2} h={2} borderRadius="full" />}
    </HStack>
  );

  const MessageBubble = ({ message, time, isSent }) => (
    <Flex justify={isSent ? "flex-end" : "flex-start"} mb={4}>
      <Box
        maxW="70%"
        bg={isSent ? "blue.500" : messageBubbleBg}
        color={isSent ? "white" : "inherit"}
        p={3}
        borderRadius="lg"
      >
        <Text>{message}</Text>
        <Text
          fontSize="xs"
          color={isSent ? "whiteAlpha.700" : "gray.500"}
          mt={1}
        >
          {time}
        </Text>
      </Box>
    </Flex>
  );

  return (
    <Container maxW="container.xl" py={8}>
      <Box
        bg={bg}
        borderRadius="xl"
        h="calc(100vh - 150px)"
        display="flex"
        overflow="hidden"
      >
        {/* Contacts List */}
        <Box
          w="350px"
          borderRight="1px"
          borderColor={borderColor}
          overflow="hidden"
          display="flex"
          flexDirection="column"
        >
          <Box p={4}>
            <Heading size="md" mb={4}>
              Messages
            </Heading>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiSearch />
              </InputLeftElement>
              <Input placeholder="Search messages..." />
            </InputGroup>
          </Box>
          <Divider />
          <VStack spacing={0} align="stretch" overflow="auto" flex={1} p={2}>
            <ChatItem
              name="Alex Smith"
              message="Hey, how's the new game coming along?"
              time="2m ago"
              isActive={true}
            />
            <ChatItem
              name="Sarah Johnson"
              message="Can you help me with the animations?"
              time="1h ago"
              unread
            />
            <ChatItem
              name="Mike Brown"
              message="The new update looks great!"
              time="3h ago"
            />
            {/* Add more chat items as needed */}
          </VStack>
        </Box>

        {/* Chat Area */}
        <Box flex={1} display="flex" flexDirection="column">
          {/* Chat Header */}
          <HStack p={4} borderBottom="1px" borderColor={borderColor}>
            <Avatar name="Alex Smith" size="sm" />
            <Box flex={1}>
              <Text fontWeight="bold">Alex Smith</Text>
              <Text fontSize="sm" color="green.400">
                Online
              </Text>
            </Box>
            <IconButton
              icon={<FiMoreVertical />}
              variant="ghost"
              aria-label="More options"
            />
          </HStack>

          {/* Messages */}
          <VStack flex={1} overflow="auto" spacing={4} p={4} align="stretch">
            <MessageBubble
              message="Hey, how's the new game coming along?"
              time="2:30 PM"
              isSent={false}
            />
            <MessageBubble
              message="It's going great! Just finished implementing the new combat system."
              time="2:31 PM"
              isSent={true}
            />
            <MessageBubble
              message="That's awesome! Can't wait to try it out."
              time="2:32 PM"
              isSent={false}
            />
          </VStack>

          {/* Message Input */}
          <Box p={4} borderTop="1px" borderColor={borderColor}>
            <InputGroup>
              <Input placeholder="Type a message..." pr="4rem" />
              <IconButton
                icon={<FiSend />}
                position="absolute"
                right={2}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                colorScheme="blue"
              />
            </InputGroup>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
