import React from "react";
import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { GameCardTemplate } from "./GameCardTemplate";
import { getGamesByCategory } from "../data/games";

export function SimilarGamesRow() {
  const bg = useColorModeValue("white", "gray.800");
  const currentGame = window.location.pathname.split("/")[2];
  const games = getGamesByCategory("Action").filter(
    (game) => game.url !== `/${currentGame}`
  );

  return (
    <Box bg={bg} p={8} borderRadius="xl">
      <Heading size="lg" mb={6}>
        Similar Games
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {games.slice(0, 3).map((game) => (
          <GameCardTemplate
            key={game.url}
            name={game.name}
            url={game.url}
            image={game.image}
            description={game.description}
            stats={{
              players: game.players,
              rating: game.rating,
              releaseDate: game.releaseDate,
              new: game.new,
            }}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
