import { IUnit } from "../../interfaces/IUnit";

// speed = ticks to move ONE node
export const UNITS: IUnit[] = [
  {
    key: "unit1",
    nodeKey: "unit1",
    position: [0,0,0],
    path: [],

    displayName: "Worker",
    type: "worker",
    createdTick: 0,
    modifiedTick: 0,
    speed: 0.01,
    pathIndex: 0,
    health: 100,
    maxHealth: 100
  },
  {
    key: "unit2",
    nodeKey: "unit2",
    position: [0,0,0],
    path: [],
    displayName: "Soldier",
    type: "soldier",
    createdTick: 0,
    modifiedTick: 0,
    speed: 10,
    pathIndex: 0,
    health: 10,
    maxHealth: 100

  },
  {
    key: "unit3",
    nodeKey: "unit3",
    position: [0,0,0],
    path: [],
    displayName: "Nothing",
    type: "nothing",
    createdTick: 0,
    modifiedTick: 0,
    speed: 10,
    pathIndex: 0,
    health: 10,
    maxHealth: 100

  },
  {
    key: "unit4",
    nodeKey: "unit4",
    position: [0,0,0],
    path: [],
    displayName: "Test",
    type: "test",
    createdTick: 0,
    modifiedTick: 0,
    speed: 10,
    pathIndex: 0,
    health: 10,
    maxHealth: 100

  }
]