import { ITech } from "./ITech";

export interface ITechTree {
  economy: ITech[];
  infrastructure: ITech[];
  military: ITech[];
  science: ITech[];
  culture: ITech[];
}