import {
  basicMap,
  intersectionMap,
  lettersOnTurnsMap,
} from "../data/validMaps";
import { followPath } from "../followPath";

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
