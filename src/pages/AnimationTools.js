import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  useColorModeValue,
  Icon,
  HStack,
  Input,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Code,
  Badge,
  useToast,
} from "@chakra-ui/react";
import {
  FiPlay,
  FiPause,
  FiRotateCw,
  FiCopy,
  FiDownload,
  FiCode,
  FiSave,
} from "react-icons/fi";

const AnimationPreview = ({ animation, isPlaying }) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bg}
      p={6}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      h="300px"
      position="relative"
      overflow="hidden"
    >
      <Box
        w="100px"
        h="100px"
        bg="blue.500"
        borderRadius="md"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        animation={isPlaying ? `${animation} 2s infinite` : "none"}
      />
    </Box>
  );
};

const AnimationCode = ({ animation }) => {
  const toast = useToast();
  const codeBg = useColorModeValue("gray.50", "gray.700");

  const handleCopy = () => {
    navigator.clipboard.writeText(animation);
    toast({
      title: "Code copied!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box position="relative">
      <Code
        display="block"
        whiteSpace="pre"
        p={4}
        borderRadius="md"
        bg={codeBg}
        fontSize="sm"
      >
        {animation}
      </Code>
      <Button
        size="sm"
        position="absolute"
        top={2}
        right={2}
        leftIcon={<FiCopy />}
        onClick={handleCopy}
      >
        Copy
      </Button>
    </Box>
  );
};

const presetAnimations = {
  bounce: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`,
  rotate: `@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
  fade: `@keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}`,
  scale: `@keyframes scale {
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
}`,
};

export function AnimationTools() {
  const [currentAnimation, setCurrentAnimation] = useState(
    presetAnimations.bounce
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [customName, setCustomName] = useState("");
  const bg = useColorModeValue("gray.50", "gray.900");

  const handleSaveAnimation = () => {
    // Implementation for saving animation
    console.log("Saving animation:", {
      name: customName,
      animation: currentAnimation,
    });
  };

  return (
    <Box bg={bg} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <VStack textAlign="center" spacing={4}>
            <Heading size="2xl">Animation Tools</Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Create, preview, and export custom animations for your games
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {/* Left Column - Preview and Controls */}
            <VStack spacing={6}>
              <AnimationPreview
                animation={currentAnimation}
                isPlaying={isPlaying}
              />

              <HStack spacing={4}>
                <Button
                  leftIcon={isPlaying ? <FiPause /> : <FiPlay />}
                  onClick={() => setIsPlaying(!isPlaying)}
                  colorScheme="blue"
                >
                  {isPlaying ? "Pause" : "Play"}
                </Button>
                <Button
                  leftIcon={<FiRotateCw />}
                  onClick={() => setIsPlaying(true)}
                >
                  Reset
                </Button>
                <Button leftIcon={<FiDownload />}>Export</Button>
              </HStack>

              <VStack w="full" align="stretch" spacing={4}>
                <FormControl>
                  <FormLabel>Animation Name</FormLabel>
                  <Input
                    placeholder="Enter animation name"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                  />
                </FormControl>

                <Button
                  leftIcon={<FiSave />}
                  colorScheme="green"
                  onClick={handleSaveAnimation}
                  isDisabled={!customName}
                >
                  Save Animation
                </Button>
              </VStack>
            </VStack>

            {/* Right Column - Code Editor and Presets */}
            <VStack spacing={6}>
              <Tabs w="full" variant="enclosed">
                <TabList>
                  <Tab>Code Editor</Tab>
                  <Tab>Presets</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel p={0} pt={4}>
                    <VStack spacing={4}>
                      <Textarea
                        value={currentAnimation}
                        onChange={(e) => setCurrentAnimation(e.target.value)}
                        minH="200px"
                        fontFamily="mono"
                      />
                      <AnimationCode animation={currentAnimation} />
                    </VStack>
                  </TabPanel>

                  <TabPanel p={0} pt={4}>
                    <SimpleGrid columns={2} spacing={4}>
                      {Object.entries(presetAnimations).map(([name, code]) => (
                        <Button
                          key={name}
                          onClick={() => setCurrentAnimation(code)}
                          variant="outline"
                          justifyContent="flex-start"
                          h="auto"
                          p={4}
                        >
                          <VStack align="flex-start" spacing={2}>
                            <HStack>
                              <Text
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                {name}
                              </Text>
                              <Badge colorScheme="blue">Preset</Badge>
                            </HStack>
                            <Text
                              fontSize="sm"
                              color={useColorModeValue("gray.600", "gray.400")}
                            >
                              Click to load animation
                            </Text>
                          </VStack>
                        </Button>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
