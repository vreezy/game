import { ITech } from "./ITech";

export interface ITechTree {
  economyTech: ITech[];
  infrastructureTech: ITech[];
  militaryTech: ITech[];
  scienceTech: ITech[];
  cultureTech: ITech[];
}