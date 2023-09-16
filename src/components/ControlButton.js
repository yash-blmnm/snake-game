import React, { useMemo } from "react";
import { styled } from "styled-components";
import { CONTROL_KEY_CODE } from "../features/Game/Board/ActiveBoard/constants";
import {
  UpArrow,
  DownArrow,
  LeftArrow,
  RightArrow,
} from "./styled/ArrowButton";
import SpaceBar from "./styled/SpaceBar";

const ButtonWrapper = styled.div`
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #dadada;
  background: #a1bac5;
  box-shadow: 10px 5px 5px;
  border-radius: 8px;
  width: 32px;
  height: 28px;

  &.space-bar {
    width: 100px;
    margin-top: 1.5em;
  }
`;

const ControlButton = ({ value, classNameString, onClick }) => {
  const controlElement = useMemo(() => {
    switch (value) {
      case CONTROL_KEY_CODE.up:
        return <UpArrow />;
        break;
      case CONTROL_KEY_CODE.down:
        return <DownArrow />;
        break;
      case CONTROL_KEY_CODE.left:
        return <LeftArrow />;
        break;
      case CONTROL_KEY_CODE.right:
        return <RightArrow />;
        break;
      case CONTROL_KEY_CODE.space:
        return <SpaceBar />;
        break;
      default:
        return <></>;
    }
  });
  return (
    <ButtonWrapper className={classNameString} onClick={onClick}>
      {controlElement}
    </ButtonWrapper>
  );
};

export default ControlButton;
