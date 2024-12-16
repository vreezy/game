export interface IBuilding {
  key: string;
  type: BuildingType;
  createdTick: number;
}

type SimpleResourceType = "wheatField" | "forest" | "quarry"

export type BuildingType = SimpleResourceType | "hut" | "temple" | "governmentBuilding" | "colosseum" | "nothing" | "bank" | "test"