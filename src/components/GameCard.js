import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  VStack,
  useColorModeValue,
  AspectRatio,
  IconButton,
  HStack,
  Tooltip,
  Button,
  Text,
  Divider,
  SimpleGrid,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import {
  FiMaximize,
  FiMinimize,
  FiVolume2,
  FiVolumeX,
  FiArrowLeft,
  FiGithub,
  FiTwitter,
  FiGlobe,
  FiUsers,
  FiStar,
  FiClock,
} from "react-icons/fi";
import { SimilarGamesRow } from "./SimilarGamesRow";
import { useNavigate } from "react-router-dom";
import { getGameData } from "../data/games";

const GameInfoBar = ({ gameInfo }) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      bg={bg}
      borderBottomRadius="xl"
      p={6}
      boxShadow="md"
      borderTop="1px"
      borderColor={borderColor}
      mt="-2px"
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {/* Game Stats */}
        <HStack spacing={8} justify="center">
          <Stat>
            <StatLabel>Active Players</StatLabel>
            <StatNumber>{gameInfo.players}</StatNumber>
            <StatHelpText>Online now</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Rating</StatLabel>
            <StatNumber>{gameInfo.rating}/5</StatNumber>
            <StatHelpText>User reviews</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Release Date</StatLabel>
            <StatNumber>{gameInfo.releaseDate}</StatNumber>
            <StatHelpText>First release</StatHelpText>
          </Stat>
        </HStack>

        {/* Creator Info */}
        <VStack align="center" spacing={2}>
          <Text fontWeight="bold">Created By</Text>
          <Text fontSize="lg">{gameInfo.creator}</Text>
          <HStack spacing={4}>
            <Tooltip label="Website">
              <IconButton
                as={Link}
                href="https://iappsbeats.com"
                isExternal
                icon={<FiGlobe />}
                variant="ghost"
                aria-label="Website"
              />
            </Tooltip>
            <Tooltip label="Twitter">
              <IconButton
                as={Link}
                href="https://twitter.com/iappsbeats"
                isExternal
                icon={<FiTwitter />}
                variant="ghost"
                aria-label="Twitter"
              />
            </Tooltip>
            <Tooltip label="GitHub">
              <IconButton
                as={Link}
                href="https://github.com/iappsbeats"
                isExternal
                icon={<FiGithub />}
                variant="ghost"
                aria-label="GitHub"
              />
            </Tooltip>
          </HStack>
        </VStack>

        {/* Game Categories */}
        <VStack align="center" spacing={2}>
          <Text fontWeight="bold">Categories</Text>
          <HStack spacing={2} flexWrap="wrap" justify="center">
            {gameInfo.category?.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant="outline"
                colorScheme="blue"
                borderRadius="full"
              >
                {cat}
              </Button>
            ))}
          </HStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export function GameCard({ gameURL, gameName, gameInfo }) {
  const bg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("white", "gray.800");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMute = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        { type: "setMuted", value: !isMuted },
        "*"
      );
      setIsMuted(!isMuted);
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} w="100%">
        <Box w="100%">
          <Box
            bg={bg}
            borderRadius="xl"
            overflow="hidden"
            position="relative"
            boxShadow="xl"
          >
            {/* Header with controls */}
            <Box
              bg={headerBg}
              p={4}
              borderBottom="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <HStack justify="space-between" align="center">
                <Box flex={1}>
                  <Button
                    leftIcon={<FiArrowLeft />}
                    variant="ghost"
                    onClick={() => navigate("/games")}
                    size="sm"
                  >
                    Back to Games
                  </Button>
                </Box>

                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  flex={1}
                  textAlign="center"
                  isTruncated
                >
                  {gameName}
                </Text>

                <HStack flex={1} justify="flex-end" spacing={2}>
                  <Tooltip label={isMuted ? "Unmute" : "Mute"}>
                    <IconButton
                      icon={isMuted ? <FiVolumeX /> : <FiVolume2 />}
                      onClick={handleMute}
                      variant="ghost"
                      size="sm"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                      colorScheme="blue"
                    />
                  </Tooltip>
                  <Tooltip
                    label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  >
                    <IconButton
                      icon={isFullscreen ? <FiMinimize /> : <FiMaximize />}
                      onClick={handleFullscreen}
                      variant="ghost"
                      size="sm"
                      aria-label={
                        isFullscreen ? "Exit Fullscreen" : "Fullscreen"
                      }
                      colorScheme="blue"
                    />
                  </Tooltip>
                </HStack>
              </HStack>
            </Box>

            {/* Game Window */}
            <AspectRatio ratio={16 / 9} minH="85vh" w="100%">
              <Box
                ref={iframeRef}
                as="iframe"
                title="GameCard"
                src={gameURL}
                border="none"
                bg={bg}
                allowFullScreen
                w="100%"
                h="100%"
                sx={{
                  aspectRatio: "16/9",
                }}
              />
            </AspectRatio>
          </Box>

          {/* Info Bar attached to iframe container */}
          <GameInfoBar gameInfo={gameInfo} />
        </Box>

        <SimilarGamesRow />
      </VStack>
    </Container>
  );
}
