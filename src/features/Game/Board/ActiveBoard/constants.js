const ROW_SIZE = 18;
const COLUMN_SIZE = 20;

const DIRECTION = {
  left: 37,
  right: 39,
  up: 38,
  down: 40,
};

const CELL_TYPE = {
  snake: "snake",
  food: "food",
  danger: "danger",
  plain: "plain",
};

export { ROW_SIZE, COLUMN_SIZE, DIRECTION, CELL_TYPE };
