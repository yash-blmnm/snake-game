import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { ROW_SIZE, COLUMN_SIZE, DIRECTION, CELL_TYPE } from "./constants";
import EachCell from "../../../../components/EachCell";
import { GameContext } from "../../../Game/GameContext";
import { GAME_STATUS } from "../../../Game/constants";
import { styled } from "styled-components";

const ActiveBoardWrapper = styled`
  display: grid;
  grid-template-columns: repeat(${ROW_SIZE}, auto [col-start]);
  grid-template-rows: repeat(${COLUMN_SIZE}, auto [row-start]);
  height: 100%;
  width: 100%;
`;

const Action = () => {
  const {
    state: { status: gameState, interval, score },
    dispatch,
  } = useContext(GameContext);

  // Snake position coordinates
  const [snakeArray, setSnakeArray] = useState([
    [2, COLUMN_SIZE / 2],
    [1, COLUMN_SIZE / 2],
    [0, COLUMN_SIZE / 2],
  ]);
  // Snake direction stored as ref to avoid conflict when binding keypress event listener.
  const snakeDirection = useRef(DIRECTION.down);
  // Food index coordinates
  const [foodIndex, setFoodIndex] = useState([]);

  const generateFood = () => {
    const xIndex = Math.floor(Math.random() * ROW_SIZE);
    const yIndex = Math.floor(Math.random() * COLUMN_SIZE);
    const doesCollideWithSnake = snakeArray.filter(
      (coordinates) => coordinates[0] === xIndex && coordinates[1] === yIndex
    );
    if (doesCollideWithSnake.length > 0) {
      generateFood();
    } else {
      setFoodIndex([xIndex, yIndex]);
    }
  };

  const doesSnakeIntersect = (firstX, firstY) => {
    const intersectArray = snakeArray.filter(
      (val, index) => val[0] === firstX && val[1] === firstY
    );
    return intersectArray.length > 0;
  };

  const play = () => {
    let firstX = snakeArray[0][0];
    let firstY = snakeArray[0][1];
    switch (snakeDirection.current) {
      case DIRECTION.up:
        firstX -= 1;
        break;
      case DIRECTION.down:
        firstX += 1;
        break;
      case DIRECTION.left:
        firstY -= 1;
        break;
      case DIRECTION.right:
        firstY += 1;
        break;
      default:
        break;
    }
    let newSnakeArray = [[firstX, firstY], ...snakeArray];
    if (foodIndex[0] === firstX && foodIndex[1] === firstY) {
      dispatch({ type: "updateGameScore", score: score + 10 });
      generateFood();
    } else if (
      firstX <= -1 ||
      firstY <= -1 ||
      firstX >= ROW_SIZE ||
      firstY >= COLUMN_SIZE ||
      doesSnakeIntersect(firstX, firstY)
    ) {
      dispatch({ type: "updateGameStatus", status: GAME_STATUS.over });
    } else {
      newSnakeArray.pop();
    }
    setSnakeArray(newSnakeArray);
  };

  const handleKeyEvents = (e) => {
    let newDir = e.keyCode;
    let dir = snakeDirection.current;
    if (dir !== newDir) {
      switch (newDir) {
        case DIRECTION.up: {
          if (dir !== DIRECTION.down) {
            snakeDirection.current = newDir;
          }
          break;
        }
        case DIRECTION.down: {
          if (dir !== DIRECTION.up) {
            snakeDirection.current = newDir;
          }
          break;
        }
        case DIRECTION.left: {
          if (dir !== DIRECTION.right) {
            snakeDirection.current = newDir;
          }
          break;
        }
        case DIRECTION.right: {
          if (dir !== DIRECTION.left) {
            snakeDirection.current = newDir;
          }
          break;
        }
        default:
          break;
      }
    }
    e.preventDefault();
  };

  const getCellType = useCallback((xindex, yindex) => {
    const isSnakeArray = snakeArray.filter(
      (coordinates) => coordinates[0] === xindex && coordinates[1] === yindex
    );
    if (isSnakeArray.length > 0) {
      return CELL_TYPE.snake;
    } else if (
      foodIndex &&
      foodIndex[0] === xindex &&
      foodIndex[1] === yindex
    ) {
      return CELL_TYPE.food;
    }
    return CELL_TYPE.plain;
  });

  useEffect(() => {
    if (gameState === GAME_STATUS.live) {
      document.addEventListener("keydown", handleKeyEvents, true);
      generateFood();
    } else {
      document.removeEventListener("keydown", handleKeyEvents, true);
    }
    return () => document.removeEventListener("keydown", handleKeyEvents, true);
  }, [gameState]);

  useEffect(() => {
    let playInterval;
    if (gameState === GAME_STATUS.live) {
      playInterval = setTimeout(() => {
        play();
      }, interval);
      return () => clearTimeout(playInterval);
    } else if (gameState === GAME_STATUS.over) {
      clearTimeout(playInterval);
    }
  }, [gameState, snakeArray]);

  return (
    <div className="board">
      {Array(ROW_SIZE)
        .fill(1)
        .map((val, i) =>
          Array(COLUMN_SIZE)
            .fill(1)
            .map((val, j) => {
              return (
                <EachCell key={`${i}_${j}`} cellType={getCellType(i, j)} />
              );
            })
        )}
    </div>
  );
};

export default Action;
