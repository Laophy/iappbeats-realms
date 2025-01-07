import React from "react";
import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Logo from "../images/iAppbeats_Logo_2.png";

export function About() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="container.xl" py={8}>
      <Box bg={bg} borderRadius="xl" p={8}>
        <VStack spacing={6} align="center">
          <Image src={Logo} alt="iAppbeats Logo" h="100px" />
          <Heading size="2xl">About iAppbeats</Heading>
          <Text fontSize="lg" textAlign="center" maxW="800px">
            iAppbeats is a modern game development platform that enables
            creators to build and host their own multiplayer games. Our platform
            provides powerful tools and resources for game developers of all
            skill levels.
          </Text>
          <Box
            bg={useColorModeValue("gray.50", "gray.700")}
            p={6}
            borderRadius="lg"
            w="100%"
          >
            <VStack spacing={4}>
              <Heading size="md">Our Mission</Heading>
              <Text textAlign="center">
                To empower creators and developers to build amazing multiplayer
                gaming experiences that bring people together.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
}
