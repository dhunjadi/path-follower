import { MapType } from "./types";
import { findStartingAndEndingPositions } from "./utils";

export function followPath(map: MapType) {
  const positions = findStartingAndEndingPositions(map);

  const { rowIndex, columnIndex } = positions.startPosition;
  const adjacentPositions: { rowIndex: number; columnIndex: number }[] = [];

  const directions = [
    { rowOffset: -1, colOffset: 0 }, // Up
    { rowOffset: 1, colOffset: 0 }, // Down
    { rowOffset: 0, colOffset: -1 }, // Left
    { rowOffset: 0, colOffset: 1 }, // Right
  ];

  for (const { rowOffset, colOffset } of directions) {
    const newRow = rowIndex + rowOffset;
    const newCol = columnIndex + colOffset;

    if (
      newRow >= 0 &&
      newRow < map.length &&
      newCol >= 0 &&
      newCol < map[newRow].length &&
      map[newRow][newCol] !== " "
    ) {
      adjacentPositions.push({ rowIndex: newRow, columnIndex: newCol });
    }
  }

  return adjacentPositions;
}
