import { IDefense } from "../../interfaces/IDefense";

export const DEFENSES: IDefense[] = [
  {
    displayName: "Wall",
    key: "0",
    type: "wall",
    cost: {
      wood: 10
    },
    createdTick: -1,
    age: 0
  },
];