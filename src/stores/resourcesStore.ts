import { StateCreator } from "zustand";
import { IResources } from "../interfaces/IResources";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { EngineStoreState } from "./engineStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { createResources } from "../Models/createResources";

export interface ResourcesStoreState extends IResources {
  // increaseResources: (resources: Partial<IResources>)  => void
  decreaseResources: (cost: Partial<IResources>) => void;
  getResources: () => IResources;
  resetResourcesStore: () => void;
}

function getNewResources(
  cost: Partial<IResources>,
  oldResources: IResources,
  operator: "increase" | "decrease"
): IResources {
  
  Object.keys(cost).forEach((key) => {
    const resourceKey = key as keyof IResources;
    if (cost[resourceKey] && operator === "decrease") {
      oldResources[resourceKey] = oldResources[resourceKey] - (cost[resourceKey] ?? 0);
    }

    if (cost[resourceKey] && operator === "increase") {
      oldResources[resourceKey] = oldResources[resourceKey] + (cost[resourceKey] ?? 0);
    }
  });

  return oldResources;
}

function initResources(): IResources {
  const r = createResources();
  return r;
}

export const resourcesStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    TechStoreState &
    SharedStoreState,
  [],
  [],
  ResourcesStoreState
> = (set, get) => ({
  ...initResources(),
  // increaseResources: (resources: Partial<IResources>) => set((state) => (getNewResources(resources, state, "increase"))),
  decreaseResources: (cost: Partial<IResources>) => {
    set((state) => (
      getNewResources(cost, createResources(state), "decrease")
    ))
  },
  getResources: () => {
    const r: IResources = {
      wheat: get().wheat,
      wood: get().wood,
      stone: get().stone,
      faith: get().faith,
      trust: get().trust,
      happiness: get().happiness,
      gold: get().gold,
      population: get().population,
      science: get().science,
    };
    return r;
  },
  resetResourcesStore: () => {
    set(() => initResources());
  },
});
