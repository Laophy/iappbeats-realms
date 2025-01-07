import React from "react";
import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  Avatar,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiEdit2, FiSettings } from "react-icons/fi";

export function Account() {
  const bg = useColorModeValue("white", "gray.800");
  const statBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Container maxW="container.xl" py={8}>
      <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={6}>
        <GridItem>
          <Box bg={bg} borderRadius="xl" p={6}>
            <VStack spacing={4}>
              <Avatar size="2xl" name="Laophy" />
              <Heading size="lg">Laophy</Heading>
              <Text color="gray.500">Member since 2023</Text>
              <Button leftIcon={<FiEdit2 />} colorScheme="blue" w="full">
                Edit Profile
              </Button>
              <Button leftIcon={<FiSettings />} variant="outline" w="full">
                Preferences
              </Button>
            </VStack>
          </Box>
        </GridItem>

        <GridItem>
          <VStack spacing={6} align="stretch">
            <Box bg={bg} borderRadius="xl" p={6}>
              <Grid
                templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
                gap={4}
              >
                <Stat bg={statBg} p={4} borderRadius="lg">
                  <StatLabel>Games Created</StatLabel>
                  <StatNumber>12</StatNumber>
                </Stat>
                <Stat bg={statBg} p={4} borderRadius="lg">
                  <StatLabel>Total Players</StatLabel>
                  <StatNumber>1.2K</StatNumber>
                </Stat>
                <Stat bg={statBg} p={4} borderRadius="lg">
                  <StatLabel>Active Games</StatLabel>
                  <StatNumber>3</StatNumber>
                </Stat>
              </Grid>
            </Box>

            <Box bg={bg} borderRadius="xl" p={6}>
              <Heading size="md" mb={4}>
                Recent Activity
              </Heading>
              <VStack spacing={4} align="stretch">
                <Text>Updated Avalonia Online - 2 days ago</Text>
                <Text>Created new world - 5 days ago</Text>
                <Text>Modified game settings - 1 week ago</Text>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
