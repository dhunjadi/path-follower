import { END_CHARACTER, START_CHARACTER } from "./constants";
import { Direction, MapType } from "./types";
import { findEndingPosition, findStartingPosition } from "./utils";

export function followPath(map: MapType) {
  const startPosition = findStartingPosition(map);
  const endPosition = findEndingPosition(map);

  if (!startPosition) {
    throw new Error("Start position '@' not found");
  }

  if (!endPosition) {
    throw new Error("End position 'x' not found");
  }

  let currentPosition = startPosition;
  let path = START_CHARACTER;
  let collectedLetters = "";
  let visited = new Set<string>();

  const directions: Direction[] = [
    { row: -1, column: 0 }, // Up
    { row: 1, column: 0 }, // Down
    { row: 0, column: -1 }, // Left
    { row: 0, column: 1 }, // Right
  ];

  let lastDirection: Direction | null = null;

  while (true) {
    visited.add(`${currentPosition.rowIndex},${currentPosition.columnIndex}`);
    let moved = false;

    // Prioritize moving in the direction we came from (lastDirection)
    let currentDirections: Direction[] = lastDirection
      ? [lastDirection, ...directions]
      : directions;

    for (let { row, column } of currentDirections) {
      let newRow = currentPosition.rowIndex + row;
      let newCol = currentPosition.columnIndex + column;

      // Skipping visited positions
      while (visited.has(`${newRow},${newCol}`)) {
        newRow += row;
        newCol += column;

        // Stop if we are not in bounds
        if (
          newRow < 0 ||
          newRow >= map.length ||
          newCol < 0 ||
          newCol >= map[newRow].length
        ) {
          break;
        }
      }

      // Check if we are in bounds and have not visited the position
      if (
        newRow >= 0 &&
        newRow < map.length &&
        newCol >= 0 &&
        newCol < map[newRow].length &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        let nextChar = map[newRow][newCol];

        if (nextChar !== " ") {
          path += nextChar;

          // Collect Capital letters
          if (/[A-Z]/.test(nextChar)) {
            collectedLetters += nextChar;
          }

          if (nextChar === END_CHARACTER) return { collectedLetters, path };

          // Update current position and last direction
          currentPosition = { rowIndex: newRow, columnIndex: newCol };
          lastDirection = { row: row, column: column };

          moved = true;
          break;
        }
      }
    }

    if (!moved) throw new Error("No valid path found");
  }
}
