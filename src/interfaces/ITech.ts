import { BuildingType } from "./IBuilding";

export interface ITech {
  key: string;
  techKey: string;
  displayName: string;
  description: string;
  cost: number;
  paid: number;
  unlocks?: BuildingType[];
  requiredTechKeys: string[];
}