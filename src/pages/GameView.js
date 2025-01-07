import React from "react";
import { useParams } from "react-router-dom";
import { GameCard } from "../components/GameCard";
import { getGameData } from "../data/games";

export function GameView({ gameId: propGameId }) {
  const { gameId: paramGameId } = useParams();
  const gameId = propGameId || paramGameId;
  const game = getGameData(gameId);

  if (!game) {
    return null; // or a 404 component
  }

  return <GameCard gameURL={game.gameUrl} gameName={game.name} />;
}
