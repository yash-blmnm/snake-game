import React, { useContext } from "react";
import { GameContext } from "../GameContext";
import { styled } from "styled-components";

const ScoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 568px;
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 12px;
`;

const Score = () => {
  const {
    state: { score, highScore },
  } = useContext(GameContext);
  return (
    <ScoreWrapper>
      <div>{score}</div>
      <div>Best: {highScore}</div>
    </ScoreWrapper>
  );
};

export default Score;
