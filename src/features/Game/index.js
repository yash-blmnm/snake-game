import React from "react";
import GameBorder from "../../components/styled/GameBorder";
import ScoreComponent from "./Score";
import Board from "./Board";
import { GameProvider } from "./GameContext";
import { styled } from "styled-components";
import Controls from "./Conrtrols";

const GameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8em;

  @media (max-width: 768px) {
    scale: 0.5;
    margin: 10px;
  }
`;

const Game = () => {
  return (
    <GameProvider>
      <GameWrapper>
        <ScoreComponent />
        <GameBorder />
        <Board />
        {/* <Controls /> */}
      </GameWrapper>
    </GameProvider>
  );
};

export default Game;
