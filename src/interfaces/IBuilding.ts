import { IResources } from "./IResources";

export interface IBuilding {
  displayName: string;
  key: string;
  type: BuildingType;
  createdTick: number;
  maxPopulation: number;
  cost: Partial<IResources>;
  age: number;
}

type SimpleResourceType = "wheatField" | "forest" | "quarry"

export type BuildingType = SimpleResourceType | "hut" | "temple" | "governmentBuilding" | "colosseum" | "nothing" | "bank" | "test"