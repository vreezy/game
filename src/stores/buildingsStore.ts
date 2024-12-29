import { StateCreator } from "zustand";
import { BuildingType, IBuilding } from "../interfaces/IBuilding";
import { BUILDINGS } from "../components/const/buildings";
import { EngineStoreState } from "./engineStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { ITechTree } from "../interfaces/ITechTree";
import { MapStoreState } from "./mapStore";
import { UNIT_ENTRY, UNIT_EXIT } from "../components/const/graph";
import { UnitStoreState } from "./unitStore";

export interface BuildingsStoreState {
  buildings: IBuilding[];
  getBuildings: () => IBuilding[];
  setBuilding: (
    nodeKey: string,
    type: BuildingType,
    createdTick: number
  ) => void;
  removeBuilding: (nodeKey: string) => void;
  isBuildingAvailable: (type: BuildingType) => boolean;
  resetBuildingStore: () => void;
}

function getBuilding(type: BuildingType): IBuilding {
  const building = BUILDINGS.find((b) => b.type === type);
  if (!building) {
    throw new Error(`Building of type ${type} not found`);
  }
  return building;
}

function initBuildings(): IBuilding[] {
  const buildings: IBuilding[] = [];

  buildings.push({
    ...getBuilding("cave"),
    key: crypto.randomUUID(),
    nodeKey: UNIT_EXIT,
  });

  buildings.push({
    ...getBuilding("spawn"),
    key: crypto.randomUUID(),
    nodeKey: UNIT_ENTRY,
  });

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
      ...getBuilding(type),
      nodeKey,
      createdTick,
    };
  } else {
    // new building
    newBuildings.push({
      ...getBuilding(type),
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
  resetBuildingStore: () =>
    set(() => ({
      buildings: initBuildings(),
    })),
});
