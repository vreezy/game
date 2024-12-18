import { IResources } from "./IResources";

interface ILease  {
  moduloTick: number;
  resources: Partial<IResources>
}

interface IIncome  {
  moduloTick: number;
  resources: Partial<IResources>
}

// increase max resources
interface IMax {
  resources: Partial<IResources>
}

export interface IBuilding {
  displayName: string;
  key: string;
  type: BuildingType;
  createdTick: number;
  maxPopulation: number;
  cost: Partial<IResources>;
  age: number;
  max?: IMax;
  lease?: ILease;
  income?: IIncome;
}

type SimpleResourceType = "wheatField" | "forest" | "quarry"

export type BuildingType = "cave" | SimpleResourceType | "hut" | "temple" | "governmentBuilding" | "colosseum" | "nothing" | "bank" | "test"