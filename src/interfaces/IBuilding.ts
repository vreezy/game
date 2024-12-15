export interface IBuilding {
  key: string;
  type: BuildingType;
  createdTick: number;
}

type SimpleResourceType = "wheatField" | "forest" | "quarry"

export type BuildingType = SimpleResourceType | "temple" | "governmentBuilding" | "colosseum" | "nothing" | "bank" | "test"