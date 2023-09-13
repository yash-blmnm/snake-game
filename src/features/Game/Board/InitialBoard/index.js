import React, { useContext } from "react";
import { GameContext } from "../../../Game/GameContext";
import { INTERVAL } from "../../../Game/constants";

function Initial() {
  const { dispatch } = useContext(GameContext);
  const startGame = (interval) => {
    dispatch({
      type: "createNewGame",
      interval,
    });
  };
  return (
    <div className="start-board">
      <div>
        <button
          className="beginner-start"
          onClick={() => startGame(INTERVAL.beginner)}
        >
          Beginner
        </button>
        <button
          className="beginner-start"
          onClick={() => startGame(INTERVAL.intermediate)}
        >
          Intermediate
        </button>
        <button
          className="beginner-start"
          onClick={() => startGame(INTERVAL.advanced)}
        >
          Advanced
        </button>
      </div>
    </div>
  );
}

export default Initial;
