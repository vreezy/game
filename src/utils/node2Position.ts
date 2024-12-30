import { BUILDING_Y } from "../components/const/graph";
import { INode } from "../interfaces/INode";
import { IPosition } from "../interfaces/IPosition";

type IPositionType = "unit" | "building";

export function node2Position(
  node: INode,
  type: IPositionType = "building"
): IPosition {
  const Y = type === "building" ? BUILDING_Y : 2;
  return [node[0], Y, node[1]];
}
