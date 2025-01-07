import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  useColorModeValue,
  Skeleton,
  Text,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { GameCardTemplate } from "../components/GameCardTemplate";
import {
  getTrendingGames,
  getGamesByCategory,
  getNewGames,
} from "../data/games";

const GameGrid = ({ games, loading, showNewBadge }) => {
  if (loading) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} height="300px" borderRadius="lg" />
        ))}
      </SimpleGrid>
    );
  }

  if (!games || games.length === 0) {
    return (
      <Box py={8} textAlign="center">
        <Text color="gray.500">No games available in this category yet</Text>
      </Box>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
      {games.map((game) => (
        <Box key={game.url} position="relative">
          <GameCardTemplate
            name={game.name}
            url={game.url}
            image={game.image}
            description={game.description}
          />
          {showNewBadge && game.new && (
            <Badge
              colorScheme="green"
              position="absolute"
              top={2}
              right={2}
              px={3}
              py={1}
              borderRadius="full"
              boxShadow="md"
            >
              NEW
            </Badge>
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export function Games() {
  const bg = useColorModeValue("white", "gray.800");
  const [loading, setLoading] = React.useState(true);
  const [trendingGames, setTrendingGames] = React.useState([]);
  const [newGames, setNewGames] = React.useState([]);
  const [actionGames, setActionGames] = React.useState([]);
  const [adventureGames, setAdventureGames] = React.useState([]);

  React.useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      try {
        setTrendingGames(getTrendingGames());
        setNewGames(getNewGames());
        setActionGames(getGamesByCategory("Action"));
        setAdventureGames(getGamesByCategory("Adventure"));
      } catch (error) {
        console.error("Error loading games:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box bg={bg} borderRadius="xl" p={8}>
          <Heading mb={6}>New Games</Heading>
          <GameGrid games={newGames} loading={loading} showNewBadge />
        </Box>

        <Box bg={bg} borderRadius="xl" p={8}>
          <Heading mb={6}>Trending</Heading>
          <GameGrid games={trendingGames} loading={loading} showNewBadge />
        </Box>

        <Box bg={bg} borderRadius="xl" p={8}>
          <Heading mb={6}>Action Games</Heading>
          <GameGrid games={actionGames} loading={loading} showNewBadge />
        </Box>

        <Box bg={bg} borderRadius="xl" p={8}>
          <Heading mb={6}>Adventure Games</Heading>
          <GameGrid games={adventureGames} loading={loading} showNewBadge />
        </Box>
      </VStack>
    </Container>
  );
}
