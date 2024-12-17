import { IResources } from "./IResources";

interface ILease extends Partial<IResources> {
  moduloTick: number;
  resources: Partial<IResources>
}

interface IIncome extends Partial<IResources> {
  moduloTick: number;
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
  lease?: ILease
  income?: IIncome
}

type SimpleResourceType = "wheatField" | "forest" | "quarry"

export type BuildingType = SimpleResourceType | "hut" | "temple" | "governmentBuilding" | "colosseum" | "nothing" | "bank" | "test"