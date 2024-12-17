import { IBuilding } from "../../interfaces/IBuilding"

export const BUILDINGS: IBuilding[] = [
  {
    key: "0",
    displayName: "Nothing",
    type: "nothing",
    cost: {},
    createdTick: -1,
    maxPopulation: 0,
    age: 0
  },
  {
    key: "1",
    displayName: "Wheat Field",
    type: "wheatField",
    cost: {
      population: 1
    },
    createdTick: -1,
    maxPopulation: 0,
    age: 0,
    income: {
      moduloTick: 1,
      resources: {
        wheat: 1
      }
    }
  },
  {
    key: "2",
    displayName: "Forest",
    type: "forest",
    cost: {
      population: 1
    },
    createdTick: -1,
    maxPopulation: 0,
    age: 0,
    income: {
      moduloTick: 1,
      resources: {
        wood: 1
      }
    }
  },
  { 
    key: "3",
    displayName: "Quarry",
    type: "quarry",
    cost: {
      population: 4,
      happiness: 1,
      wheat: 20,
      wood: 50
    },
    createdTick: -1,
    maxPopulation: 0,
    age: 0,
    income: {
      moduloTick: 1,
      resources: {
        stone: 1
      }
    }
  },
  { 
    key: "4",
    displayName: "Hut",
    type: "hut",
    cost: {
      wheat: 10,
      wood: 20
    },
    lease: {
      resources: {
        wheat: 1
      },
      moduloTick: 10
    },
    createdTick: -1,
    maxPopulation: 5,
    age: 0
  }
]