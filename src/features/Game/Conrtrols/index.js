import React, { useContext } from "react";
import { styled } from "styled-components";
import ControlButton from "../../../components/ControlButton";
import { CONTROL_KEY_CODE } from "../Board/ActiveBoard/constants";
import { GameContext } from "../GameContext";
import { GAME_STATUS } from "../constants";

const AllControlsWrapper = styled.section``;

const ControlsWrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  margin: 2em 0 0;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HorizontalControlsWrapper = styled.div`
  display: flex;
  gap: 3em;
`;

const DetailsWrapper = styled.details`
  width: 100%;
  margin-top: 2em;
  color: #033203;
  summary {
    font-weight: 800;
  }
  p {
    margin: 0.125em;
  }
  @media (max-width: 768px) {
    scale: 0.75;
    margin: 0;
  }
`;

const Controls = () => {
  const {
    state: { status },
    dispatch,
  } = useContext(GameContext);
  const onControlsClick = (key) => {
    if ([GAME_STATUS.live, GAME_STATUS.pause].includes(status)) {
      dispatch({
        type: "onContolsClick",
        contolKey: key,
      });
    }
  };
  return (
    <AllControlsWrapper>
      <DetailsWrapper open={true}>
        <summary>Keyboard Controls</summary>
        <p>Use the Up, Down, Lefft and Right arrows for direction.</p>
        <p>Use Space key to pause or restart the game.</p>
      </DetailsWrapper>
      <ControlsWrapper>
        <ControlButton
          value={CONTROL_KEY_CODE.up}
          onClick={() => onControlsClick(CONTROL_KEY_CODE.up)}
        />
        <HorizontalControlsWrapper>
          <ControlButton
            value={CONTROL_KEY_CODE.left}
            onClick={() => onControlsClick(CONTROL_KEY_CODE.left)}
          />
          <ControlButton
            value={CONTROL_KEY_CODE.right}
            onClick={() => onControlsClick(CONTROL_KEY_CODE.right)}
          />
        </HorizontalControlsWrapper>
        <ControlButton
          value={CONTROL_KEY_CODE.down}
          onClick={() => onControlsClick(CONTROL_KEY_CODE.down)}
        />
        <ControlButton
          value={CONTROL_KEY_CODE.space}
          classNameString={"space-bar"}
          onClick={() => onControlsClick(CONTROL_KEY_CODE.space)}
        />
      </ControlsWrapper>
    </AllControlsWrapper>
  );
};

export default Controls;
