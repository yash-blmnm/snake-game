import React, { memo } from "react";
import { styled } from "styled-components";
import { CELL_TYPE } from "../features/Game/Board/ActiveBoard/constants";
import image from "../images/food.svg";

const CellWrapper = styled.div`
  height: 28px;
  width: 28px;
  background: ${({ $cellType, $imgUrl }) => {
    switch ($cellType) {
      case CELL_TYPE.food: {
        return `no-repeat center / contain url(${$imgUrl});`;
        break;
      }
      case CELL_TYPE.snake:
        return "#010201";
        break;
      default:
        return "";
        break;
    }
  }};
  border-radius: 8px;
`;

const EachCellComponent = ({ cellType }) => {
  return <CellWrapper $cellType={cellType} $imgUrl={image} />;
};

export default memo(EachCellComponent);
