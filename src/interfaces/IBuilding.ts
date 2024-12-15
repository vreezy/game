export interface IBuilding {
  key: string;
  type: BuildingType;
  lastPayTick?: number;
}

export type BuildingType = "wheatFarm" | "nothing" | "bank" | "test"