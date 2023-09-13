import React, { useContext } from "react";
import InitialBoard from "./InitialBoard";
import ActiveBoard from "./ActiveBoard";
import { GameContext } from "../GameContext";
import { GAME_STATUS } from "../constants";
import EndBoard from "./EndBoard";

const Board = () => {
  const {
    state: { status: gameState },
  } = useContext(GameContext);
  return (
    <>
      {gameState === GAME_STATUS.none ? (
        <InitialBoard />
      ) : (
        <>
          {gameState === GAME_STATUS.over ? <EndBoard /> : ""}
          <ActiveBoard />
        </>
      )}
    </>
  );
};

export default Board;
