import Brick from "./brick.js";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 20 + 24 * rowIndex
        }
        bricks.push(new Brick(game, position))
      }
    })
  })
};

export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; // This array will represent the placement of bricks for this level of the game: each sub array will be a row of bricks; 1 represents a brick, and 0 represents a space between bricks
