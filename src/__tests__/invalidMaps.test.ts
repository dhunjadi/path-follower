import {
  missingStartCharacter,
  missingEndCharacter,
  multipleStarts1,
  multipleStarts2,
  multipleStarts3,
  multipleEnds,
} from "../data/invalidMaps";
import { followPath } from "../followPath";

describe("Missing start and end", () => {
  it("should throw an error", () => {
    expect(() => followPath(missingStartCharacter)).toThrow(
      "Start position '@' not found"
    );
  });

  it("should throw an error", () => {
    expect(() => followPath(missingEndCharacter)).toThrow(
      "End position 'x' not found"
    );
  });
});

describe("Multiple starts and ends", () => {
  it("should throw an error multipleStarts1", () => {
    expect(() => followPath(multipleStarts1)).toThrow(
      "Multiple start positions found"
    );
  });

  it("should throw an error multipleStarts2", () => {
    expect(() => followPath(multipleStarts2)).toThrow(
      "Multiple start positions found"
    );
  });

  it("should throw an error multipleStarts3", () => {
    expect(() => followPath(multipleStarts3)).toThrow(
      "Multiple start positions found"
    );
  });

  it("should throw an error multipleEnds", () => {
    expect(() => followPath(multipleEnds)).toThrow(
      "Multiple end positions found"
    );
  });
});
