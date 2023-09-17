import React, { useContext } from "react";
import InitialBoard from "./InitialBoard";
import ActiveBoard from "./ActiveBoard";
import { GameContext } from "../GameContext";
import { GAME_STATUS } from "../constants";
import EndBoard from "./EndBoard";
import { styled } from "styled-components";

const BoardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px dashed #010201;
  height: 504px;
  width: 560px;
`;

const Board = () => {
  const {
    state: { status: gameState },
  } = useContext(GameContext);
  return (
    <BoardWrapper>
      {gameState === GAME_STATUS.none ? (
        <InitialBoard />
      ) : (
        <>
          {[GAME_STATUS.over, GAME_STATUS.success].includes(gameState) ? (
            <EndBoard />
          ) : (
            ""
          )}
          <ActiveBoard />
        </>
      )}
    </BoardWrapper>
  );
};

export default Board;
