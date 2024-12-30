import { StateCreator } from "zustand";
import { BuildingType, IBuilding } from "../interfaces/IBuilding";

import { EngineStoreState } from "./engineStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { ITechTree } from "../interfaces/ITechTree";
import { MapStoreState } from "./mapStore";
import { UNIT_ENTRY_POSITION, UNIT_EXIT_POSITION } from "../components/const/graph";
import { UnitStoreState } from "./unitStore";
import { createBuilding } from "../Models/createBuilding";

export interface BuildingsStoreState {
  buildings: IBuilding[];
  getBuildings: () => IBuilding[];
  // TODO addBUidling
  // TODO updateBuilding 
  // TODO Remvoe setBuilding
  setBuilding: (
    nodeKey: string,
    type: BuildingType,
    createdTick: number
  ) => void;
  removeBuilding: (nodeKey: string) => void;
  isBuildingAvailable: (type: BuildingType) => boolean;
  resetBuildingStore: () => void;
}

function initBuildings(): IBuilding[] {
  const buildings: IBuilding[] = [];

  buildings.push(createBuilding("cave", [...UNIT_EXIT_POSITION], 0));
  buildings.push(createBuilding("spawn", [...UNIT_ENTRY_POSITION], 0));

  return buildings;
}

function getNewBuildings(
  state: BuildingsStoreState,
  nodeKey: string,
  type: BuildingType,
  createdTick: number
) {
  const newBuildings = [...state.buildings];
  const index = state.buildings.findIndex(
    (building) => building.nodeKey === nodeKey
  );

  // update building if it already exists
  if (index > -1) {
    newBuildings[index] = {
      // this is wrong need to remove setBuilding
      ...createBuilding(type, [0,0,0], createdTick),
      nodeKey,
      createdTick,
    };
  } else {
    // new building
    newBuildings.push({
      // this is wrong need to remove setBuilding
      ...createBuilding(type, [0,0,0], createdTick),
      nodeKey,
      createdTick,
    });
  }

  return newBuildings;
}

export const buildingStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    TechStoreState &
    MapStoreState &
    UnitStoreState &
    SharedStoreState,
  [],
  [],
  BuildingsStoreState
> = (set, get) => ({
  buildings: initBuildings(),
  getBuildings: () => get().buildings,
  removeBuilding: (nodeKey) => {
    set((state) => ({
      buildings: state.buildings.filter((b) => b.nodeKey !== nodeKey),
    }));

    get().updatePath();
  },
  setBuilding: (nodeKey, type, createdTick) => {
    set((state) => ({
      buildings: getNewBuildings(state, nodeKey, type, createdTick),
    }));

    get().updatePath();
  },
  isBuildingAvailable: (type) => {
    if (type === "forest" || type === "tower") {
      return true;
    }

    const techTree = get().getTechTree();
    const techTreeKeys = Object.keys(techTree) as (keyof ITechTree)[];

    return techTreeKeys.some((treeKey) => {
      return techTree[treeKey].some((tech) => {
        if (
          tech.unlocks &&
          tech.unlocks.includes(type) &&
          tech.paid === tech.cost
        ) {
          return true;
        }
      });
    });
  },
  resetBuildingStore: () => {
    set(() => ({
      buildings: initBuildings(),
    }))

    get().updatePath();
  },
    
});
