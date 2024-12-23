import { IUnitType } from "./IUnit";

export interface IWave {
  createTick: number;
  type: IUnitType;
}