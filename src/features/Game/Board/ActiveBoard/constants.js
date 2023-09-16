const ROW_SIZE = 18;
const COLUMN_SIZE = 20;

const CONTROL_KEY_CODE = {
  left: 37,
  right: 39,
  up: 38,
  down: 40,
  space: 32,
};

const CELL_TYPE = {
  snake: "snake",
  food: "food",
  danger: "danger",
  plain: "plain",
};

export { ROW_SIZE, COLUMN_SIZE, CONTROL_KEY_CODE, CELL_TYPE };
