import React from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  HStack,
  useColorModeValue,
  Button,
  Image,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import {
  FiUsers,
  FiServer,
  FiGlobe,
  FiCpu,
  FiShield,
  FiAward,
} from "react-icons/fi";
import iAppsLogo from "../images/iappslogo.png";

const Feature = ({ icon, title, description }) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bg}
      p={6}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      <VStack spacing={4} align="flex-start">
        <Icon as={icon} boxSize={6} color="blue.500" />
        <Heading size="md">{title}</Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")}>
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

const Statistic = ({ label, value, helpText }) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bg}
      p={6}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Stat>
        <StatLabel fontSize="lg">{label}</StatLabel>
        <StatNumber fontSize="4xl" fontWeight="bold" color="blue.500">
          {value}
        </StatNumber>
        <StatHelpText>{helpText}</StatHelpText>
      </Stat>
    </Box>
  );
};

export function About() {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box bg={bg}>
      <Container maxW="container.xl">
        {/* Logo Section */}
        <Box
          w="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={8}
        >
          <Image
            src={iAppsLogo}
            alt="iAppbeats Logo"
            maxW="300px"
            w="100%"
            filter={useColorModeValue("none", "brightness(0.8)")}
            transition="all 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <VStack spacing={16}>
          {/* Hero Section */}
          <VStack spacing={6} textAlign="center">
            <Heading size="2xl">Welcome to iAppbeats Realms</Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.600", "gray.400")}
              maxW="2xl"
            >
              A next-generation gaming platform where creators and players come
              together to build, share, and experience amazing multiplayer
              worlds.
            </Text>
            <HStack spacing={4} pt={4}>
              <Button size="lg" colorScheme="blue">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </HStack>
          </VStack>

          {/* Stats Section */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            <Stat
              bg={useColorModeValue("white", "gray.800")}
              p={6}
              borderRadius="lg"
              boxShadow="md"
            >
              <StatLabel>Active Players</StatLabel>
              <StatNumber>50,000+</StatNumber>
              <StatHelpText>Across all worlds</StatHelpText>
            </Stat>
            <Statistic
              label="Worlds Created"
              value="500+"
              helpText="And growing daily"
            />
            <Statistic
              label="Server Uptime"
              value="99.9%"
              helpText="Reliable performance"
            />
          </SimpleGrid>

          {/* Features Section */}
          <VStack spacing={12}>
            <Heading size="xl">Why Choose iAppbeats Realms?</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <Feature
                icon={FiServer}
                title="Instant Deployment"
                description="Deploy your game server in seconds with our automated infrastructure and scaling solutions."
              />
              <Feature
                icon={FiShield}
                title="Enterprise Security"
                description="Built-in DDoS protection, SSL encryption, and advanced security features to keep your games safe."
              />
              <Feature
                icon={FiCpu}
                title="High Performance"
                description="Powered by cutting-edge hardware and optimized networking for lag-free gaming experience."
              />
              <Feature
                icon={FiUsers}
                title="Growing Community"
                description="Join thousands of creators and players in our vibrant gaming community."
              />
              <Feature
                icon={FiGlobe}
                title="Global Network"
                description="Servers strategically located worldwide to ensure low latency for all players."
              />
              <Feature
                icon={FiAward}
                title="24/7 Support"
                description="Dedicated support team ready to help you with any questions or issues."
              />
            </SimpleGrid>
          </VStack>

          {/* Technology Stack */}
          <VStack spacing={8} w="full">
            <Heading size="xl">Powered By Custom Technology</Heading>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              p={8}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              w="full"
            >
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={8}
                alignItems="center"
              >
                <VStack align="flex-start" spacing={4}>
                  <Heading size="lg" color="blue.500">
                    iAppbeats Game Engine
                  </Heading>
                  <Text
                    fontSize="lg"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    Our platform is powered by a proprietary game engine
                    designed and developed by Stefan Knorr. This custom-built
                    technology enables:
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <HStack>
                      <Icon as={FiCpu} color="blue.500" />
                      <Text>Real-time multiplayer</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FiServer} color="blue.500" />
                      <Text>Scalable architecture</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FiShield} color="blue.500" />
                      <Text>Built-in security</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FiGlobe} color="blue.500" />
                      <Text>Cross-platform support</Text>
                    </HStack>
                  </SimpleGrid>
                </VStack>
                <Box
                  position="relative"
                  p={6}
                  bg={useColorModeValue("blue.50", "blue.900")}
                  borderRadius="xl"
                >
                  <VStack spacing={4}>
                    <Image
                      src={iAppsLogo}
                      alt="iAppbeats Logo"
                      height="200px"
                      objectFit="contain"
                    />
                    <VStack spacing={1}>
                      <Text fontWeight="bold">Designed & Developed by</Text>
                      <Text fontSize="xl" color="blue.500" fontWeight="bold">
                        Stefan Knorr
                      </Text>
                      <Text
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                      >
                        Lead Engine Architect
                      </Text>
                    </VStack>
                    <Text
                      textAlign="center"
                      color={useColorModeValue("gray.600", "gray.400")}
                    >
                      With over a decade of experience in game engine
                      development and multiplayer systems architecture
                    </Text>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>

          {/* Call to Action */}
          <Box
            bg={useColorModeValue("blue.50", "blue.900")}
            w="full"
            p={12}
            borderRadius="xl"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Heading size="lg">Ready to Start Your Journey?</Heading>
              <Text fontSize="lg" maxW="2xl">
                Join thousands of creators who are already building amazing
                multiplayer experiences on iAppbeats Realms.
              </Text>
              <Button size="lg" colorScheme="blue" mt={4}>
                Create Your First World
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
