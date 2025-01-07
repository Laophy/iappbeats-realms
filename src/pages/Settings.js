import React from "react";
import {
  Container,
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  Select,
  Button,
  Divider,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiSave } from "react-icons/fi";

export function Settings() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="container.xl" py={8}>
      <Box bg={bg} borderRadius="xl" p={8}>
        <VStack spacing={6} align="stretch">
          <Heading size="lg">Settings</Heading>

          <Box>
            <Heading size="md" mb={4}>
              General
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Enable Notifications</FormLabel>
                <Switch colorScheme="blue" defaultChecked />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Show Online Status</FormLabel>
                <Switch colorScheme="blue" defaultChecked />
              </FormControl>
            </SimpleGrid>
          </Box>

          <Divider />

          <Box>
            <Heading size="md" mb={4}>
              Preferences
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <FormControl>
                <FormLabel>Language</FormLabel>
                <Select defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Theme</FormLabel>
                <Select defaultValue="dark">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </Select>
              </FormControl>
            </SimpleGrid>
          </Box>

          <Divider />

          <Box>
            <Heading size="md" mb={4}>
              Privacy
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Profile Visibility</FormLabel>
                <Switch colorScheme="blue" defaultChecked />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Friend Requests</FormLabel>
                <Switch colorScheme="blue" defaultChecked />
              </FormControl>
            </SimpleGrid>
          </Box>

          <Button
            leftIcon={<FiSave />}
            colorScheme="blue"
            size="lg"
            w={{ base: "full", md: "auto" }}
            alignSelf="flex-end"
          >
            Save Changes
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
