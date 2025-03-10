import "./style.css";
import { followPath } from "./followPath.ts";
import { multipleEnds } from "./data/invalidMaps.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
Open dev console
`;

followPath(multipleEnds);
