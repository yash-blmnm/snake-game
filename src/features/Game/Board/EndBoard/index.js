import React, { useContext } from "react";
import { GameContext } from "../../GameContext";
import { GAME_STATUS } from "../../constants";
import { styled } from "styled-components";
import PlayButton from "../../../../components/PlayButton";
import HeadingBanner from "../../../../components/styled/HeadingBanner";
import Confetti from "../../../../components/Confetti";

const EndBoardWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  z-index: 99;
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
`;

const EndBoard = () => {
  const {
    state: { isHighScore, highScore },
    dispatch,
  } = useContext(GameContext);
  return (
    <EndBoardWrapper>
      <HeadingBanner textColor="#d3d3d3">
        {isHighScore ? `New High Score: ${highScore}` : "GAME OVER!"}
      </HeadingBanner>
      <PlayButton
        onClick={() =>
          dispatch({ type: "updateGameStatus", status: GAME_STATUS.none })
        }
        label={"Play Again"}
      />
      {isHighScore ? <Confetti /> : ""}
    </EndBoardWrapper>
  );
};

export default EndBoard;
