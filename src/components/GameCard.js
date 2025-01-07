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
} from "@chakra-ui/react";
import {
  FiMaximize,
  FiMinimize,
  FiVolume2,
  FiVolumeX,
  FiArrowLeft,
} from "react-icons/fi";
import { SimilarGamesRow } from "./SimilarGamesRow";
import { useNavigate } from "react-router-dom";
import { getGameData } from "../data/games";

export function GameCard({ gameURL, gameName = "Game" }) {
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
        <Box
          w="100%"
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
                    aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
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
              borderRadius="xl"
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
        <SimilarGamesRow />
      </VStack>
    </Container>
  );
}
