import { END_CHARACTER, START_CHARACTER } from "./constants";
import { MapType, Position } from "./types";

export function findStartingAndEndingPositions(map: MapType): {
  startPosition: Position;
  endPosition: Position;
} {
  let startPosition: Position | null = null;
  let endPosition: Position | null = null;

  for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < map[rowIndex].length;
      columnIndex++
    ) {
      if (map[rowIndex][columnIndex] === START_CHARACTER) {
        if (startPosition) {
          throw new Error("Multiple start positions found");
        }
        startPosition = { rowIndex, columnIndex };
      }
      if (map[rowIndex][columnIndex] === END_CHARACTER) {
        if (endPosition) {
          throw new Error("Multiple end positions found");
        }
        endPosition = { rowIndex, columnIndex };
      }
    }
  }

  if (!startPosition) {
    throw new Error("Start position '@' not found");
  }

  if (!endPosition) {
    throw new Error("End position 'x' not found");
  }

  return { startPosition, endPosition };
}
