import React from "react";
import { styled } from "styled-components";
import ControlButton from "../../../components/ControlButton";
import { DIRECTION } from "../Board/ActiveBoard/constants";

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  margin: 2em;
`;

const HorizontalControlsWrapper = styled.div`
  display: flex;
  gap: 1.5em;
`;

const Controls = () => {
  return (
    <ControlsWrapper>
      <ControlButton value={DIRECTION.up} />
      <HorizontalControlsWrapper>
        <ControlButton value={DIRECTION.left} />
        <ControlButton value={DIRECTION.right} />
      </HorizontalControlsWrapper>
      <ControlButton value={DIRECTION.down} />
    </ControlsWrapper>
  );
};

export default Controls;
