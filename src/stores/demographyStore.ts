import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { EngineStoreState } from "./engineStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { MapStoreState } from "./mapStore";

export interface IDemography {
  age: number;
}

export interface DemographyStoreState extends IDemography {
  increaseDemographies: (demographies: Partial<IDemography>) => void;
  decreaseDemographies: (demographies: Partial<IDemography>) => void;
  demographies: () => IDemography;
  resetDemographyStore: () => void;
}

function getNewDemographies(
  cost: Partial<IDemography>,
  state: DemographyStoreState,
  operator: "increase" | "decrease"
): Partial<IDemography> {
  const newResources: Partial<IDemography> = {};
  Object.keys(cost).forEach((key) => {
    const resourceKey = key as keyof IDemography;
    if (cost[resourceKey] && operator === "decrease") {
      newResources[resourceKey] = state[resourceKey] - (cost[resourceKey] ?? 0);
    }

    if (cost[resourceKey] && operator === "increase") {
      newResources[resourceKey] = state[resourceKey] + (cost[resourceKey] ?? 0);
    }
  });

  return newResources;
}

function initDemographies(): IDemography {
  const d: IDemography = {
    age: 0,
  };
  return d;
}

export const demographyStore: StateCreator<
BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState & TechStoreState & MapStoreState & SharedStoreState,
  [],
  [],
  DemographyStoreState
> = (set, get) => ({
  ...initDemographies(),

  increaseDemographies: (demographies: Partial<IDemography>) =>
    set((state) => getNewDemographies(demographies, state, "increase")),
  decreaseDemographies: (demographies: Partial<IDemography>) =>
    set((state) => getNewDemographies(demographies, state, "decrease")),
  demographies: () => {
    const r: IDemography = {
      age: get().age,
    };
    return r;
  },
  resetDemographyStore: () => {
    set(() => initDemographies());
  },
});
