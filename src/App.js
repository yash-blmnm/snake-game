import { useEffect, useState } from "react";
import "./App.css";
import EachCellComponent from "./components/EachCellComponent";

const ROW_SIZE = 36;
const COLUMN_SIZE = 40;
const GAME_STATUS = ["none", "live", "over"];
const DIRECTION = {
  left: 37,
  right: 38,
  up: 40,
  down: 39,
};
const BEGINNER_INTERVAL = 500;

function App() {
  // const [snakeArray, setSnakeArray] = useState([[40/2, 2], [40/2, 1], [40/2, 0]]);
  const [snakeObj, setSnakeObj] = useState({
    x: [2, 1, 0],
    y: [40 / 2, 40 / 2, 40 / 2],
    // direction: DIRECTION.down,
  });
  const [snakeDirection, setSnakeDirection] = useState(DIRECTION.down);
  const [gameStatus, setGameStatus] = useState("none");
  const [gameInterval, setGameInterval] = useState(BEGINNER_INTERVAL);
  const [foodIndex, setFoodIndex] = useState([]);
  const [score, setScore] = useState(0);

  const play = () => {
    let { x: xIndices, y: yIndices } = snakeObj;
    let firstX = xIndices[0];
    let firstY = yIndices[0];
    switch (snakeDirection) {
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
    xIndices = [firstX, ...xIndices];
    yIndices = [firstY, ...yIndices];
    if (foodIndex[0] === firstX && foodIndex[1] === firstY) {
      setScore(score + 10);
    } else if (
      firstX < 0 ||
      firstY < 0 ||
      firstX > ROW_SIZE ||
      firstY > COLUMN_SIZE
    ) {
      setGameStatus("over");
    } else {
      xIndices.pop();
      yIndices.pop();
    }
    setSnakeObj({ ...snakeObj, x: xIndices, y: yIndices });
  };

  const handleKEyEvents = (e) => {
    console.log(e.keyCode);
    // let { direction: dir } = snakeObj;
    let dir = snakeDirection;
    switch (e.keyCode) {
      case DIRECTION.up: {
        if (dir !== DIRECTION.down) {
          dir = DIRECTION.up;
        }
        break;
      }
      case DIRECTION.down: {
        if (dir !== DIRECTION.up) {
          dir = DIRECTION.down;
        }
        break;
      }
      case DIRECTION.left: {
        if (dir !== DIRECTION.right) {
          dir = DIRECTION.left;
        }
        break;
      }
      case DIRECTION.right: {
        if (dir !== DIRECTION.left) {
          dir = DIRECTION.right;
        }
        break;
      }
      default:
        break;
    }
    // setSnakeObj({ ...snakeObj, direction: dir });
    setSnakeDirection(dir);
    e.preventDefault();
  };

  useEffect(() => {
    if (gameStatus === "live") {
      document.addEventListener("keydown", handleKEyEvents, true);
    } else {
      document.removeEventListener("keydown", handleKEyEvents, true);
    }
    return () => document.removeEventListener("keydown", handleKEyEvents, true);
  }, [gameStatus]);

  useEffect(() => {
    let playInterval;
    if (gameStatus === "live") {
      playInterval = setTimeout(() => {
        play();
      }, gameInterval);
      return () => clearTimeout(playInterval);
    } else if (gameStatus === "over") {
      clearTimeout(playInterval);
    }
  }, [gameStatus, snakeObj]);

  return (
    <main className="main">
      {gameStatus === "none" ? (
        <div className=" start-board">
          <button
            className="beginner-start"
            onClick={() => setGameStatus("live")}
          >
            Start
          </button>
        </div>
      ) : (
        <div className="board" onKeyDown={handleKEyEvents}>
          {Array(ROW_SIZE)
            .fill(1)
            .map((val, i) =>
              Array(COLUMN_SIZE)
                .fill(1)
                .map((val, j) => {
                  const isSnake =
                    snakeObj.x.includes(i) && snakeObj.y.includes(j);
                  return (
                    <EachCellComponent
                      key={`${i}_${j}`}
                      isFoodPresent={false}
                      isSnakePresent={isSnake}
                    />
                  );
                })
            )}
        </div>
      )}
    </main>
  );
}

export default App;
