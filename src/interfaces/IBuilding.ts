import { IResources } from "./IResources";
import { IStructure } from "./IStructure";

// produce Income
interface IIncome  {
  moduloTick: number;
  resources: Partial<IResources>
}

// increase max resources
interface IMax {
  resources: Partial<IResources>
}

interface IWeapons {
  damage: number;
  range: number;
}

export interface IBuilding extends IStructure {

  type: BuildingType;
  increaseMax?: IMax;
  income?: IIncome;
  weapons?: IWeapons;
}

type Towers = "tower"
type SimpleResourceType = "wheatField" | "forest" | "quarry"

export type BuildingType = Towers | "cave" | "spawn" | SimpleResourceType | "hut" | "temple" | "governmentBuilding" | "colosseum" | "nothing" | "bank" | "test"