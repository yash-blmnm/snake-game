import React from "react";
import GameBorder from "../../components/GameBorder";
import ScoreComponent from "./Score";
import Board from "./Board";
import { GameProvider } from "./GameContext";

const Game = () => {
  return (
    <GameProvider>
      <ScoreComponent />
      <GameBorder />
      <Board />
    </GameProvider>
  );
};

export default Game;
