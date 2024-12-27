import { IGameObject } from "./IGameObject";

export type IUnitType = "worker" | "soldier" | "nothing" | "test"

export interface IUnit extends IGameObject {
  type: IUnitType;
  speed: number;
  lastPathIndex: number;
  modifiedTick: number;
  live: number;
}