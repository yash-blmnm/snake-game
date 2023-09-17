import React from "react";
import GameBorder from "../../components/styled/GameBorder";
import Score from "./Score";
import Board from "./Board";
import { GameProvider } from "./GameContext";
import { styled } from "styled-components";
import Controls from "./Conrtrols";

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  @media (max-width: 768px) {
    scale: 0.5;
    margin: 0px;
  }
`;

const Game = () => {
  return (
    <GameProvider>
      <SectionsWrapper>
        <GameWrapper>
          <Score />
          <GameBorder />
          <Board />
        </GameWrapper>
        <Controls />
      </SectionsWrapper>
    </GameProvider>
  );
};

export default Game;
