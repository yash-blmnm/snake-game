import React, { useContext } from "react";
import { GameContext } from "../GameContext";

const Score = () => {
  const {
    state: { score, highScore },
  } = useContext(GameContext);
  return (
    <div>
      <div>{score}</div>
      <div>Best: {highScore}</div>
    </div>
  );
};

export default Score;
