import React from "react";
import {
  Container,
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Image,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Badge,
  Progress,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  FiPlay,
  FiClock,
  FiTrendingUp,
  FiStar,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import WelcomeImage from "../images/etherion_background.jpg";
import { GameCardTemplate } from "../components/GameCardTemplate";

const featuredGames = [
  {
    name: "Etherion Online",
    url: "/etherion",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2227990/ss_5dd4c284e52dde2608db60e13f6cd690f962c98f.1920x1080.jpg?t=1678488847",
    players: "1.2K",
    rating: 4.8,
  },
  {
    name: "Avalonia Online",
    url: "/avalonia",
    image: "https://i.imgur.com/iXWHpsh.png",
    players: "856",
    rating: 4.5,
  },
  {
    name: "Corleone Online",
    url: "/corleone",
    image: "https://i.imgur.com/ICdGJMh.png",
    players: "943",
    rating: 4.6,
  },
];

const recentGames = [
  {
    name: "Etherion Online",
    lastPlayed: "2 hours ago",
    progress: 75,
    level: 42,
  },
  {
    name: "Avalonia Online",
    lastPlayed: "3 days ago",
    progress: 45,
    level: 28,
  },
];

const newsUpdates = [
  {
    title: "New Dungeon Released!",
    game: "Etherion Online",
    date: "1 hour ago",
    type: "update",
  },
  {
    title: "Weekend XP Boost Event",
    game: "Avalonia Online",
    date: "3 hours ago",
    type: "event",
  },
  {
    title: "Server Maintenance",
    game: "Corleone Online",
    date: "5 hours ago",
    type: "maintenance",
  },
];

const onlineFriends = [
  {
    name: "Alex Smith",
    game: "Etherion Online",
    status: "In Combat",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sarah Johnson",
    game: "Avalonia Online",
    status: "Trading",
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    name: "Mike Brown",
    game: "Corleone Online",
    status: "In Town",
    avatar: "https://bit.ly/code-beast",
  },
];

const NewsItem = ({ title, game, date, type }) => {
  const getBadgeColor = (type) => {
    switch (type) {
      case "update":
        return "green";
      case "event":
        return "purple";
      case "maintenance":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <Box p={4} borderRadius="lg" bg={useColorModeValue("gray.50", "gray.700")}>
      <HStack justify="space-between" mb={2}>
        <Badge colorScheme={getBadgeColor(type)}>{type}</Badge>
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>
      </HStack>
      <Text fontWeight="bold" mb={1}>
        {title}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {game}
      </Text>
    </Box>
  );
};

const FriendItem = ({ name, game, status, avatar }) => (
  <HStack spacing={3} p={2}>
    <Avatar size="sm" name={name} src={avatar} />
    <Box flex={1}>
      <Text fontWeight="medium">{name}</Text>
      <HStack>
        <Text fontSize="sm" color="gray.500">
          {game}
        </Text>
        <Text fontSize="sm" color="green.400">
          • {status}
        </Text>
      </HStack>
    </Box>
  </HStack>
);

const RecentGameItem = ({ name, lastPlayed, progress, level }) => (
  <Box p={4} borderRadius="lg" bg={useColorModeValue("gray.50", "gray.700")}>
    <HStack justify="space-between" mb={2}>
      <Text fontWeight="bold">{name}</Text>
      <Badge colorScheme="blue">Level {level}</Badge>
    </HStack>
    <Progress value={progress} colorScheme="blue" size="sm" mb={2} />
    <HStack spacing={2} color="gray.500" fontSize="sm">
      <FiClock />
      <Text>{lastPlayed}</Text>
    </HStack>
  </Box>
);

export function Home() {
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const bgOverlay = useColorModeValue("rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)");

  return (
    <Container maxW="container.xl" py={8}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
        {/* Main Content */}
        <Box gridColumn={{ lg: "span 2" }}>
          {/* Welcome Banner */}
          <Box
            h="400px"
            borderRadius="xl"
            position="relative"
            overflow="hidden"
            mb={6}
          >
            <Image
              src={WelcomeImage}
              alt="Welcome"
              objectFit="cover"
              w="100%"
              h="100%"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg={bgOverlay}
              p={8}
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Heading size="2xl" mb={4} color="white">
                Welcome back,{" "}
                <Text as="span" color="blue.400">
                  Laophy
                </Text>
                !
              </Heading>
              <Button
                leftIcon={<FiPlay />}
                colorScheme="blue"
                size="lg"
                w="fit-content"
                onClick={() => navigate("/etherion")}
              >
                Continue Playing
              </Button>
            </Box>
          </Box>

          {/* Featured Games */}
          <Box bg={bg} borderRadius="xl" p={6} mb={6}>
            <HStack justify="space-between" mb={4}>
              <Heading size="lg">Featured Games</Heading>
              <Button variant="ghost" rightIcon={<FiTrendingUp />}>
                View All
              </Button>
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {featuredGames.map((game) => (
                <Box key={game.name} position="relative" role="group">
                  <GameCardTemplate
                    name={game.name}
                    url={game.url}
                    image={game.image}
                  />
                  <HStack
                    position="absolute"
                    top={4}
                    right={4}
                    bg="blackAlpha.700"
                    color="white"
                    p={2}
                    borderRadius="md"
                    spacing={4}
                    zIndex="2"
                    transition="all 0.2s"
                    _groupHover={{
                      transform: "translateY(-4px)",
                    }}
                  >
                    <HStack>
                      <FiUsers />
                      <Text fontSize="sm">{game.players}</Text>
                    </HStack>
                    <HStack>
                      <FiStar />
                      <Text fontSize="sm">{game.rating}</Text>
                    </HStack>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Recent Games */}
          <Box bg={bg} borderRadius="xl" p={6}>
            <Heading size="lg" mb={4}>
              Recent Games
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {recentGames.map((game) => (
                <RecentGameItem key={game.name} {...game} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>

        {/* Sidebar */}
        <VStack spacing={6}>
          {/* Online Friends */}
          <Box bg={bg} borderRadius="xl" p={6} w="100%">
            <HStack justify="space-between" mb={4}>
              <Heading size="md">Online Friends</Heading>
              <AvatarGroup size="sm" max={3}>
                {onlineFriends.map((friend) => (
                  <Avatar
                    key={friend.name}
                    name={friend.name}
                    src={friend.avatar}
                  />
                ))}
              </AvatarGroup>
            </HStack>
            <VStack align="stretch" spacing={2}>
              {onlineFriends.map((friend) => (
                <FriendItem key={friend.name} {...friend} />
              ))}
            </VStack>
          </Box>

          {/* News & Updates */}
          <Box bg={bg} borderRadius="xl" p={6} w="100%">
            <Heading size="md" mb={4}>
              News & Updates
            </Heading>
            <VStack align="stretch" spacing={4}>
              {newsUpdates.map((news, index) => (
                <NewsItem key={index} {...news} />
              ))}
            </VStack>
          </Box>

          {/* Achievement Progress */}
          <Box bg={bg} borderRadius="xl" p={6} w="100%">
            <HStack justify="space-between" mb={4}>
              <Heading size="md">Achievements</Heading>
              <Badge colorScheme="purple">Level 42</Badge>
            </HStack>
            <VStack align="stretch" spacing={4}>
              <Box>
                <HStack justify="space-between" mb={1}>
                  <Text fontSize="sm">Dragon Slayer</Text>
                  <Text fontSize="sm" color="gray.500">
                    80%
                  </Text>
                </HStack>
                <Progress value={80} colorScheme="purple" size="sm" />
              </Box>
              <Box>
                <HStack justify="space-between" mb={1}>
                  <Text fontSize="sm">Master Crafter</Text>
                  <Text fontSize="sm" color="gray.500">
                    45%
                  </Text>
                </HStack>
                <Progress value={45} colorScheme="purple" size="sm" />
              </Box>
              <Box>
                <HStack justify="space-between" mb={1}>
                  <Text fontSize="sm">Explorer</Text>
                  <Text fontSize="sm" color="gray.500">
                    60%
                  </Text>
                </HStack>
                <Progress value={60} colorScheme="purple" size="sm" />
              </Box>
            </VStack>
          </Box>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
