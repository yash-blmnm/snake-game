import React from "react";
import { styled } from "styled-components";
import { DIRECTION } from "../features/Game/Board/ActiveBoard/constants";
import {
  UpArrow,
  DownArrow,
  LeftArrow,
  RightArrow,
} from "./styled/ArrowButton";

const ButtonWrapper = styled.div``;

const ControlButton = ({ value }) => {
  // const controlElement = () => {
  switch (value) {
    case DIRECTION.up:
      return <UpArrow />;
      break;
    case DIRECTION.down:
      return <DownArrow />;
      break;
    case DIRECTION.left:
      return <LeftArrow />;
      break;

    case DIRECTION.right:
      return <RightArrow />;
      break;
    default:
      return <></>;
  }
  // };
  // return <ButtonWrapper>{controlElement}</ButtonWrapper>;
};

export default ControlButton;
