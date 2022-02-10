import Brick from "./brick.js";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex, // First number represents width of brick
          y: 75 + 24 * rowIndex // First number represents desired distance between top bricks and top of game screen; second number represents height of brick
        }
        bricks.push(new Brick(game, position))
      }
    })
  })
  return bricks;
};

export const level1 = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; // This array will represent the placement of bricks for this level of the game: each sub array will be a row of bricks; 1 represents a brick, and 0 represents a space between bricks
