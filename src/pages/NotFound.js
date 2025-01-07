import React from "react";
import {
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

export function NotFound() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="container.xl" py={8}>
      <Box bg={bg} borderRadius="xl" p={8}>
        <VStack spacing={6} align="center">
          <Heading size="2xl">404 - Page Not Found</Heading>
          <Text fontSize="xl">
            Oops! The page you're looking for doesn't exist.
          </Text>
          <Link to="/">
            <Button leftIcon={<FiHome />} colorScheme="blue" size="lg">
              Return Home
            </Button>
          </Link>
        </VStack>
      </Box>
    </Container>
  );
}
