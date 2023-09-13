import React, { useContext } from "react";
import { GameContext } from "../../GameContext";
import { GAME_STATUS } from "../../constants";

const EndBoard = () => {
  const {
    state: { isHighScore, highscore },
    dispatch,
  } = useContext(GameContext);
  return (
    <div>
      {isHighScore ? (
        <span>New High Score: {highscore}</span>
      ) : (
        <span>GAME OVER!</span>
      )}
      <button
        onClick={() =>
          dispatch({ type: "updateGameStatus", status: GAME_STATUS.over })
        }
      >
        Play Again
      </button>
    </div>
  );
};

export default EndBoard;
