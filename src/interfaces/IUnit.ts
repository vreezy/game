import { IGameObject } from "./IGameObject";
import { IPosition } from "./IPosition";

export type IUnitType = "worker" | "soldier" | "nothing" | "test"

export interface IUnit extends IGameObject {
  type: IUnitType;
  speed: number;
  path: IPosition[];
  pathIndex: number;
  modifiedTick: number;
  live: number;
}