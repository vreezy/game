import { INode } from "../interfaces/INode";
import { IPosition } from "../interfaces/IPosition";

export function position2node(
  position: IPosition,

): INode {
  return [position[0], position[2]];
}
