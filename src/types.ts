export type MapType = string[][];

export type Position = { rowIndex: number; columnIndex: number };

export type Result = {
  collectedLetters: string;
  path: string;
};

export type Direction = {
  row: number;
  column: number;
};
