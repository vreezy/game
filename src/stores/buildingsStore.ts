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

export interface BuildingsStoreState {
  buildings: IBuilding[];
  setBuilding: (key: string, type: BuildingType, createdTick: number) => void;
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
  });

  for (let i = 0; i < 4; i++) {
    buildings.push({
      ...getBuilding("nothing"),
      key: crypto.randomUUID(),
    });
  }

  return buildings;
}

function getNewBuildings(
  state: BuildingsStoreState,
  key: string,
  type: BuildingType,
  createdTick: number
) {
  const index = state.buildings.findIndex((building) => building.key === key);
  if (index > -1) {
    const newBuildings = [...state.buildings];
    newBuildings[index] = {
      ...getBuilding(type),
      key,
      createdTick,
    };
    return newBuildings;
  }
  return state.buildings;
}

export const buildingStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    TechStoreState &
    MapStoreState &
    SharedStoreState,
  [],
  [],
  BuildingsStoreState
> = (set, get) => ({
  buildings: initBuildings(),
  setBuilding: (key, type, createdTick) =>
    set((state) => ({
      buildings: getNewBuildings(state, key, type, createdTick),
    })),
  isBuildingAvailable: (type) => {
    if (type === "forest") {
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
