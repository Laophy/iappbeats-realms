import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
  HStack,
  Icon,
  Tooltip,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiUsers, FiStar, FiClock } from "react-icons/fi";

export function GameCardTemplate({
  name,
  url,
  image,
  description,
  stats = {},
}) {
  const bg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  // Default values for stats
  const {
    players = "0",
    rating = "0.0",
    releaseDate = "TBA",
    new: isNew = false,
  } = stats;

  return (
    <Link to={url}>
      <Box
        bg={bg}
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          transform: "translateY(-4px)",
          shadow: "lg",
          bg: hoverBg,
        }}
      >
        <Image src={image} alt={name} w="100%" h="200px" objectFit="cover" />
        <VStack p={4} align="stretch" spacing={3}>
          <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500" noOfLines={2}>
            {description}
          </Text>

          {/* Game Stats */}
          <HStack spacing={4} pt={2}>
            <Tooltip label="Active Players">
              <HStack spacing={1}>
                <Icon as={FiUsers} color="blue.500" />
                <Text fontSize="sm">{players}</Text>
              </HStack>
            </Tooltip>
            <Tooltip label="Rating">
              <HStack spacing={1}>
                <Icon as={FiStar} color="yellow.500" />
                <Text fontSize="sm">{rating}/5</Text>
              </HStack>
            </Tooltip>
            <Tooltip label="Release Date">
              <HStack spacing={1}>
                <Icon as={FiClock} color="green.500" />
                <Text fontSize="sm">{releaseDate}</Text>
              </HStack>
            </Tooltip>
            {isNew && (
              <Badge colorScheme="green" ml="auto">
                NEW
              </Badge>
            )}
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
}
