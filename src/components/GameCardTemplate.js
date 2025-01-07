import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function GameCardTemplate({ name, url, image, description }) {
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.700");
  const hoverBg = useColorModeValue("gray.50", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");

  const handleClick = () => {
    if (url) {
      navigate(url.startsWith("/") ? url : `/games/${url}`);
    }
  };

  return (
    <Box
      onClick={handleClick}
      cursor={url ? "pointer" : "default"}
      position="relative"
      transition="all 0.2s"
      _hover={{
        transform: url ? "translateY(-4px)" : "none",
      }}
    >
      <Box
        bg={bg}
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.2s"
        boxShadow={url ? "md" : "none"}
        _groupHover={{
          bg: url ? hoverBg : bg,
          boxShadow: url ? "xl" : "none",
        }}
      >
        <Box position="relative" h="200px">
          {image ? (
            <Image src={image} alt={name} w="100%" h="100%" objectFit="cover" />
          ) : (
            <Skeleton height="100%" />
          )}
        </Box>
        <VStack align="start" p={4} spacing={2} position="relative" zIndex="1">
          <Heading size="md">{name}</Heading>
          {description && (
            <Text color={textColor} fontSize="sm" noOfLines={2}>
              {description}
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
