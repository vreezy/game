import { IBuilding } from "../../interfaces/IBuilding"

export const BUILDINGS: IBuilding[] = [
  {
    key: "0",
    nodeKey: "",
    displayName: "Nothing",
    type: "nothing",
    cost: {},
    createdTick: -1,

    age: 0
  },
  {
    key: "31231",
    nodeKey: "",
    displayName: "Cave",
    type: "cave",
    cost: {},
    createdTick: -1,
    age: 1000,
    increaseMax: {
      resources: {
        wheat: 100,
        wood: 100,
        gold: 10,
        population: 5,
        science: 1
      }
    }
  },
  {
    key: "222dqd",
    nodeKey: "",
    displayName: "Spawn",
    type: "spawn",
    cost: {},
    createdTick: -1,
    age: 1000,
  },
  {
    key: "1",
    nodeKey: "",
    displayName: "Wheat Field",
    type: "wheatField",
    cost: {
      wood: 10
    },
    createdTick: -1,

    age: 0,
    income: {
      moduloTick: 1,
      resources: {
        wheat: 1
      }
    }
  },
  {
    key: "AAA",
    nodeKey: "",
    displayName: "Tower",
    type: "tower",
    cost: {    
    },
    createdTick: -1,
    age: 0,
    weapons: {
      damage: 1,
      range: 2
    }

  },
  {
    key: "2",
    nodeKey: "",
    displayName: "Forest",
    type: "forest",
    cost: {    
    },
    createdTick: -1,

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
    nodeKey: "",
    displayName: "Quarry",
    type: "quarry",
    cost: {
      population: 4,
      happiness: 1,
      wheat: 20,
      wood: 50
    },
    createdTick: -1,

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
    nodeKey: "",
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
    increaseMax: {
      resources: {
        population: 5
      }
    },
    age: 0
  }
]