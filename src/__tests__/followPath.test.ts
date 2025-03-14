import {
  missingEndCharacter,
  missingStartCharacter,
  multipleEnds,
  multipleStarts1,
  multipleStarts2,
  multipleStarts3,
} from "../data/invalidMaps";
import {
  basicMap,
  intersectionMap,
  lettersOnTurnsMap,
} from "../data/validMaps";
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

describe("Correct paths tests", () => {
  it("should return correct collectedLetters and path in basicMap ", () => {
    const result = followPath(basicMap);
    expect(result.collectedLetters).toBe("ACB");
    expect(result.path).toBe("@---A---+|C|+---+|+-B-x");
  });

  it("should return correct collectedLetters and path in intersectionMap", () => {
    const result = followPath(intersectionMap);
    expect(result.collectedLetters).toBe("ABCD");
    expect(result.path).toBe("@|A+---B--+|+--C-+|-||+---D--+|x");
  });

  it("should return correct collectedLetters and path in lettersOnTurnsMap", () => {
    const result = followPath(lettersOnTurnsMap);
    expect(result.collectedLetters).toBe("ACB");
    expect(result.path).toBe("@---A---+|||C---+|+-B-x");
  });
});
