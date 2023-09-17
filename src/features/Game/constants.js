const GAME_STATUS = {
  none: "none",
  live: "live",
  over: "over",
  pause: "pause",
  success: "success",
};

const INTERVAL = {
  beginner: 200,
  intermediate: 150,
  advanced: 100,
};

const SUCCESS_CRITERIA = {
  minInterval: 60000,
  minScore: 150,
};

export { GAME_STATUS, INTERVAL, SUCCESS_CRITERIA };
