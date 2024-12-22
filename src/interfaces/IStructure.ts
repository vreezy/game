import { BuildingType } from "./IBuilding";
import { DefenseType } from "./IDefense";
import { ILease } from "./ILease";
import { IResources } from "./IResources";

export interface IStructure {
  displayName: string;
  key: string;
  nodeKey: string;
  type: BuildingType | DefenseType;
  createdTick: number;
  cost: Partial<IResources>;
  lease?: ILease;
  age: number;
}
