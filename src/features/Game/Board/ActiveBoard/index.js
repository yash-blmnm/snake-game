import React, { useContext, useState, useEffect, useRef } from "react";
import { ROW_SIZE, COLUMN_SIZE, DIRECTION } from "./constants";
import EachCellComponent from "../../../../components/EachCellComponent";
import { GameContext } from "../../../Game/GameContext";
import { GAME_STATUS } from "../../../Game/constants";

const Action = () => {
  const { state: gameAttributes, dispatch } = useContext(GameContext);

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
      dispatch({ type: "updateGameScore", score: gameAttributes.score + 10 });
      generateFood();
    } else if (
      firstX <= -1 ||
      firstY <= -1 ||
      firstX >= ROW_SIZE ||
      firstY >= COLUMN_SIZE
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

  useEffect(() => {
    if (gameAttributes.status === GAME_STATUS.live) {
      document.addEventListener("keydown", handleKeyEvents, true);
      generateFood();
    } else {
      document.removeEventListener("keydown", handleKeyEvents, true);
    }
    return () => document.removeEventListener("keydown", handleKeyEvents, true);
  }, [gameAttributes]);

  useEffect(() => {
    let playInterval;
    if (gameAttributes.status === GAME_STATUS.live) {
      playInterval = setTimeout(() => {
        play();
      }, gameAttributes.interval);
      return () => clearTimeout(playInterval);
    } else if (gameAttributes.status === GAME_STATUS.over) {
      clearTimeout(playInterval);
    }
  }, [gameAttributes, snakeArray]);

  return (
    <div className="board">
      {Array(ROW_SIZE)
        .fill(1)
        .map((val, i) =>
          Array(COLUMN_SIZE)
            .fill(1)
            .map((val, j) => {
              const isSnakeArray = snakeArray.filter(
                (coordinates) => coordinates[0] === i && coordinates[1] === j
              );
              return (
                <EachCellComponent
                  key={`${i}_${j}`}
                  isFoodPresent={
                    foodIndex && foodIndex[0] === i && foodIndex[1] === j
                  }
                  isSnakePresent={isSnakeArray.length > 0}
                />
              );
            })
        )}
    </div>
  );
};

export default Action;
