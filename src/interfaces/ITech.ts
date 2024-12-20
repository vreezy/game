import { BuildingType } from "./IBuilding";

export interface ITech {
  key: string;
  displayName: string;
  description: string;
  cost: number;
  paid: number;
  benefit?: BuildingType;
  dependsOn?: string;
  active: boolean;
}