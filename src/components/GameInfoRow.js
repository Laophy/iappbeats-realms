import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Badge,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUsers, FiStar, FiCalendar, FiUser } from "react-icons/fi";

export function GameInfoRow({ gameCard, gameInfo }) {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box w="100%" position="relative">
      {/* Main content */}
      <Box w="100%">{gameCard}</Box>

      {/* Fixed stats sidebar */}
      <Box
        position="fixed"
        right={0}
        top={0}
        w="300px"
        bg={bg}
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        maxHeight="100vh"
        overflowY="auto"
        m={8}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "gray.500",
            borderRadius: "24px",
          },
        }}
      >
        <VStack align="stretch" spacing={4}>
          <Box>
            <Heading size="lg">{gameInfo.name}</Heading>
            {gameInfo.altName && (
              <Badge colorScheme="blue" mt={2}>
                {gameInfo.altName}
              </Badge>
            )}
          </Box>
          <Text color="gray.500">{gameInfo.desc}</Text>

          <VStack align="stretch" spacing={3}>
            <HStack>
              <Icon as={FiCalendar} />
              <Text>Released: {gameInfo.releaseDate}</Text>
            </HStack>
            <HStack>
              <Icon as={FiUser} />
              <Text>Creator: {gameInfo.creator}</Text>
            </HStack>
            <HStack>
              <Icon as={FiUsers} />
              <Text>Active Players: {gameInfo.players}</Text>
            </HStack>
            <HStack>
              <Icon as={FiStar} />
              <Text>Rating: {gameInfo.rating}/5</Text>
            </HStack>
          </VStack>

          <Box>
            <Text fontWeight="bold" mb={2}>
              Categories
            </Text>
            <HStack spacing={2} flexWrap="wrap">
              {gameInfo.category?.map((cat) => (
                <Badge key={cat} colorScheme="purple">
                  {cat}
                </Badge>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
