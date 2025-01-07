import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { GameCard } from "../components/GameCard";

export function Animations() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="container.xl" py={8}>
      <Box bg={bg} borderRadius="xl" p={8} mb={6}>
        <VStack spacing={4} align="start">
          <Heading>Animation Tools</Heading>
          <Text fontSize="lg">
            Create stunning animations for your games using our powerful
            animation tools. Design character movements, effects, and more with
            our intuitive interface.
          </Text>
        </VStack>
      </Box>
      <GameCard
        gameURL="https://iappsbeats.com/animations/"
        gameInfo={{
          name: "Animations Tool",
          desc: "Animations tool for iAppbeats, used to create animations for hosted games.",
        }}
      />
    </Container>
  );
}
