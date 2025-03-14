import "./style.css";
import { followPath } from "./followPath.ts";
import {
  basicMap,
  intersectionMap,
  lettersOnTurnsMap,
} from "./data/validMaps.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
Open dev console
`;

console.log("basicMap: ", followPath(basicMap));
console.log("intersectionMap: ", followPath(intersectionMap));
console.log("lettersOnTurnsMap: ", followPath(lettersOnTurnsMap));
