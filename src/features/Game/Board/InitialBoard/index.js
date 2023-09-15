import React, { useContext, useCallback } from "react";
import { GameContext } from "../../../Game/GameContext";
import { INTERVAL } from "../../../Game/constants";
import { styled } from "styled-components";
import PlayButton from "../../../../components/PlayButton";
import HeadingBanner from "../../../../components/styled/HeadingBanner";
import SnakeAnimation from "../../../../components/SnakeAnimation";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
  width: 70%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Initial() {
  const { dispatch } = useContext(GameContext);

  const startGame = (interval) => {
    dispatch({
      type: "createNewGame",
      interval,
    });
  };

  const initialInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  return (
    <BoardWrapper>
      <SnakeAnimation />
      <HeadingBanner>SNAKE</HeadingBanner>
      <ButtonWrapper>
        <PlayButton
          onClick={() => startGame(INTERVAL.beginner)}
          ref={initialInput}
          label={"Beginner"}
        />
        <PlayButton
          onClick={() => startGame(INTERVAL.intermediate)}
          label={"Intermediate"}
        />
        <PlayButton
          onClick={() => startGame(INTERVAL.advanced)}
          label={"Advanced"}
        />
      </ButtonWrapper>
    </BoardWrapper>
  );
}

export default Initial;
