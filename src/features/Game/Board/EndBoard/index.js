import React, { useContext } from "react";
import { GameContext } from "../../GameContext";
import { GAME_STATUS } from "../../constants";
import { styled } from "styled-components";
import PlayButton from "../../../../components/PlayButton";
import HeadingBanner from "../../../../components/styled/HeadingBanner";

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
  width: 80%;
`;

const EndBoard = () => {
  const {
    state: { isHighScore, highscore },
    dispatch,
  } = useContext(GameContext);
  return (
    <EndBoardWrapper>
      <HeadingBanner>
        {isHighScore ? `New High Score: ${highscore}` : "GAME OVER!"}
      </HeadingBanner>
      <PlayButton
        onClick={() =>
          dispatch({ type: "updateGameStatus", status: GAME_STATUS.none })
        }
        label={"Play Again"}
      />
    </EndBoardWrapper>
  );
};

export default EndBoard;
