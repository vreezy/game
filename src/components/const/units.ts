import { IUnit } from "../../interfaces/IUnit";

// speed = ticks to move ONE node
export const UNITS: IUnit[] = [
  {
    key: "unit1",
    nodeKey: "unit1",
    displayName: "Worker",
    type: "worker",
    createdTick: 0,
    modifiedTick: 0,
    speed: 10,
    lastPathIndex: 0,
    live: 100
  },
  {
    key: "unit2",
    nodeKey: "unit2",
    displayName: "Soldier",
    type: "soldier",
    createdTick: 0,
    modifiedTick: 0,
    speed: 10,
    lastPathIndex: 0,
    live: 10

  },
  {
    key: "unit3",
    nodeKey: "unit3",
    displayName: "Nothing",
    type: "nothing",
    createdTick: 0,
    modifiedTick: 0,
    speed: 10,
    lastPathIndex: 0,
    live: 10

  },
  {
    key: "unit4",
    nodeKey: "unit4",
    displayName: "Test",
    type: "test",
    createdTick: 0,
    modifiedTick: 0,
    speed: 10,
    lastPathIndex: 0,
    live: 10

  }
]