import "./style.css";
import { followPath } from "./followPath.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
Open dev console
`;

followPath();
