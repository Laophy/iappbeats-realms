import React from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  VStack,
  HStack,
  Heading,
  Text,
  useColorModeValue,
  AspectRatio,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  Icon,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiBook,
  FiSearch,
  FiGithub,
  FiCode,
  FiDownload,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";

const updates = [
  {
    version: "2.1.0",
    date: "2024-03-15",
    type: "feature",
    title: "New Animation API",
    description:
      "Introducing the new Animation API with improved performance and easier integration.",
  },
  {
    version: "2.0.9",
    date: "2024-03-10",
    type: "bugfix",
    title: "Physics Engine Patch",
    description:
      "Fixed collision detection issues in multiplayer environments.",
  },
  {
    version: "2.0.8",
    date: "2024-03-05",
    type: "security",
    title: "Security Update",
    description:
      "Enhanced authentication system and patched potential vulnerabilities.",
  },
];

const quickLinks = [
  { title: "Getting Started", icon: FiBook },
  { title: "API Reference", icon: FiCode },
  { title: "SDK Download", icon: FiDownload },
  { title: "GitHub Repo", icon: FiGithub },
];

const UpdateBadge = ({ type }) => {
  const colors = {
    feature: "green",
    bugfix: "orange",
    security: "red",
  };
  return <Badge colorScheme={colors[type]}>{type}</Badge>;
};

export function Docs() {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const sidebarBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Container maxW="container.xl" py={8}>
      <Grid templateColumns={{ base: "1fr", lg: "280px 1fr" }} gap={6}>
        {/* Sidebar */}
        <GridItem>
          <VStack spacing={6} position="sticky" top="20px">
            {/* Search */}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiSearch />
              </InputLeftElement>
              <Input placeholder="Search documentation..." />
            </InputGroup>

            {/* Quick Links */}
            <Box bg={bg} p={4} borderRadius="xl" w="100%" boxShadow="sm">
              <Text fontWeight="bold" mb={4}>
                Quick Links
              </Text>
              <VStack align="stretch" spacing={2}>
                {quickLinks.map((link) => (
                  <Button
                    key={link.title}
                    leftIcon={<Icon as={link.icon} />}
                    variant="ghost"
                    justifyContent="flex-start"
                    size="sm"
                  >
                    {link.title}
                  </Button>
                ))}
              </VStack>
            </Box>

            {/* Latest Updates */}
            <Box bg={bg} p={4} borderRadius="xl" w="100%" boxShadow="sm">
              <Text fontWeight="bold" mb={4}>
                Latest Updates
              </Text>
              <VStack align="stretch" spacing={4}>
                {updates.slice(0, 3).map((update) => (
                  <Box key={update.version}>
                    <HStack justify="space-between" mb={1}>
                      <UpdateBadge type={update.type} />
                      <Text fontSize="xs" color="gray.500">
                        {update.date}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" fontWeight="medium">
                      {update.title}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* System Status */}
            <Box bg={bg} p={4} borderRadius="xl" w="100%" boxShadow="sm">
              <Text fontWeight="bold" mb={4}>
                System Status
              </Text>
              <VStack align="stretch" spacing={2}>
                <HStack justify="space-between">
                  <Text fontSize="sm">API</Text>
                  <HStack>
                    <Icon as={FiCheckCircle} color="green.500" />
                    <Text fontSize="sm" color="green.500">
                      Operational
                    </Text>
                  </HStack>
                </HStack>
                <HStack justify="space-between">
                  <Text fontSize="sm">Documentation</Text>
                  <HStack>
                    <Icon as={FiCheckCircle} color="green.500" />
                    <Text fontSize="sm" color="green.500">
                      Operational
                    </Text>
                  </HStack>
                </HStack>
                <HStack justify="space-between">
                  <Text fontSize="sm">SDK</Text>
                  <HStack>
                    <Icon as={FiAlertCircle} color="yellow.500" />
                    <Text fontSize="sm" color="yellow.500">
                      Partial Outage
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        {/* Main Content */}
        <GridItem>
          <Box bg={bg} borderRadius="xl" overflow="hidden" boxShadow="sm">
            <Tabs>
              <TabList px={6} pt={4}>
                <Tab>Documentation</Tab>
                <Tab>Changelog</Tab>
                <Tab>Examples</Tab>
                <Tab>Support</Tab>
              </TabList>

              <TabPanels>
                <TabPanel p={0}>
                  <AspectRatio ratio={16 / 9} minH="80vh">
                    <Box
                      as="iframe"
                      src="https://docs.iappsbeats.com/#References/Player/"
                      title="Documentation"
                      allowFullScreen
                      border="none"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
                    />
                  </AspectRatio>
                </TabPanel>

                <TabPanel>
                  <VStack align="stretch" spacing={6} p={6}>
                    {updates.map((update, index) => (
                      <Box key={update.version}>
                        <HStack justify="space-between" mb={2}>
                          <HStack>
                            <Heading size="md">
                              Version {update.version}
                            </Heading>
                            <UpdateBadge type={update.type} />
                          </HStack>
                          <Text color="gray.500">{update.date}</Text>
                        </HStack>
                        <Text fontWeight="medium" mb={2}>
                          {update.title}
                        </Text>
                        <Text color="gray.500">{update.description}</Text>
                        {index < updates.length - 1 && <Divider mt={6} />}
                      </Box>
                    ))}
                  </VStack>
                </TabPanel>

                <TabPanel>
                  <Box p={6}>
                    <Heading size="md" mb={4}>
                      Code Examples
                    </Heading>
                    {/* Add code examples content */}
                  </Box>
                </TabPanel>

                <TabPanel>
                  <Box p={6}>
                    <Heading size="md" mb={4}>
                      Developer Support
                    </Heading>
                    {/* Add support content */}
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
