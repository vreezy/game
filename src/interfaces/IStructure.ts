import { BuildingType } from "./IBuilding";
import { DefenseType } from "./IDefense";
import { IGameObject } from "./IGameObject";
import { ILease } from "./ILease";
import { IResources } from "./IResources";


export interface IStructure extends IGameObject {
  type: BuildingType | DefenseType;
  cost: Partial<IResources>;
  lease?: ILease;
  age: number;
}
