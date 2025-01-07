import React from "react";
import { Box, Grid, Heading, useColorModeValue } from "@chakra-ui/react";
import { GameCardTemplate } from "./GameCardTemplate";
import { getTrendingGames } from "../data/games";

export function SimilarGamesRow() {
  const bg = useColorModeValue("white", "gray.800");
  const games = getTrendingGames().slice(0, 3); // Get top 3 trending games

  return (
    <Box w="100%" bg={bg} borderRadius="xl" p={6} boxShadow="xl">
      <Heading as="h3" size="lg" mb={6}>
        Similar Games
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {games.map((game) => (
          <GameCardTemplate
            key={game.url}
            name={game.name}
            url={game.url}
            image={game.image}
            description={game.description}
          />
        ))}
        <GameCardTemplate name="Coming Soon" />
      </Grid>
    </Box>
  );
}
