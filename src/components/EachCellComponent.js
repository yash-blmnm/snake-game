import React, { memo } from "react";

const EachCellComponent = ({ key, isSnakePresent, isFoodPresent }) => {
  const snakeClass = "snake";
  const foodClass = "food";
  const classList = `cell ${
    isSnakePresent ? snakeClass : isFoodPresent ? foodClass : ""
  }`;
  return <div className={classList}></div>;
};

export default memo(EachCellComponent);
