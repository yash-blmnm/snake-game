import { createContext, useReducer } from "react";
import { GAME_STATUS, INTERVAL } from "./constants";

const GAME_DEFAULT_ATTRS = {
  status: GAME_STATUS.none,
  interval: INTERVAL.beginner,
  score: 0,
  highScore: 0,
  isHighScore: false,
  controlEvent: null,
};

export const GameContext = createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case "createNewGame": {
      return {
        ...state,
        status: GAME_STATUS.live,
        interval: action.interval,
        score: 0,
        isHighScore: false,
        controlEvent: null,
      };
    }
    case "updateGameInterval":
      {
        return { ...state, interval: action.interval };
      }
      break;
    case "updateGameStatus":
      {
        const { status: gameState } = action;
        const { score, highScore } = state;
        if (gameState === GAME_STATUS.over && score > highScore) {
          return {
            ...state,
            status: gameState,
            highScore: score,
            isHighScore: true,
          };
        }
        return { ...state, status: gameState };
      }
      break;
    case "updateGameScore":
      {
        return { ...state, score: action.score };
      }
      break;
    case "onContolsClick": {
      return { ...state, controlEvent: { keyCode: action.contolKey } };
    }
    default: {
      return state;
    }
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, GAME_DEFAULT_ATTRS);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
