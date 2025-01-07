import React from "react";
import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Avatar,
  Button,
  Badge,
  SimpleGrid,
  Progress,
  useColorModeValue,
  AvatarGroup,
} from "@chakra-ui/react";
import { FiPlus, FiUsers, FiStar, FiTrophy } from "react-icons/fi";

export function Clans() {
  const bg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("gray.50", "gray.700");

  const ClanCard = ({ name, members, level, exp, leader, description }) => (
    <Box bg={cardBg} p={6} borderRadius="xl">
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between">
          <Heading size="md">{name}</Heading>
          <Badge colorScheme="blue">Level {level}</Badge>
        </HStack>

        <Text noOfLines={2}>{description}</Text>

        <Box>
          <Text fontSize="sm" mb={1}>
            Experience
          </Text>
          <Progress value={exp} colorScheme="blue" borderRadius="full" />
        </Box>

        <HStack justify="space-between">
          <HStack>
            <FiUsers />
            <Text fontSize="sm">{members} members</Text>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            Leader: {leader}
          </Text>
        </HStack>

        <AvatarGroup size="sm" max={3}>
          <Avatar name="Ryan Florence" />
          <Avatar name="Segun Adebayo" />
          <Avatar name="Kent Dodds" />
          <Avatar name="Prosper Otemuyiwa" />
          <Avatar name="Christian Nwamba" />
        </AvatarGroup>

        <Button variant="outline" size="sm">
          View Details
        </Button>
      </VStack>
    </Box>
  );

  return (
    <Container maxW="container.xl" py={8}>
      <Box bg={bg} borderRadius="xl" p={8}>
        <VStack spacing={8} align="stretch">
          <HStack justify="space-between">
            <VStack align="start" spacing={1}>
              <Heading size="lg">Clans</Heading>
              <Text color="gray.500">
                Join or create a clan to play together
              </Text>
            </VStack>
            <Button leftIcon={<FiPlus />} colorScheme="blue">
              Create Clan
            </Button>
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            <ClanCard
              name="Dragon Warriors"
              members={24}
              level={15}
              exp={75}
              leader="DragonMaster"
              description="A clan dedicated to conquering the most challenging dungeons and raids."
            />
            <ClanCard
              name="Mystic Alliance"
              members={18}
              level={12}
              exp={45}
              leader="MysticLeader"
              description="We focus on magical adventures and spell mastery."
            />
            <ClanCard
              name="Shadow Hunters"
              members={31}
              level={20}
              exp={90}
              leader="ShadowKing"
              description="Elite PvP clan for the most skilled players."
            />
          </SimpleGrid>
        </VStack>
      </Box>
    </Container>
  );
}
