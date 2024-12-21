import { IStructure } from "./IStructure";

export type DefenseType = "wall" | "gate" | "tower" | "nothing" | "test"

export interface IDefense extends IStructure {
  type: DefenseType;
}