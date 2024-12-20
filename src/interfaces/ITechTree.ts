import { ITech } from "./ITech";

export interface ITechTree {
  economyTech: ITech[];
  infrastructure: ITech[];
  military: ITech[];
  science: ITech[];
  culture: ITech[];
}