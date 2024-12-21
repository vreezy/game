import { StateCreator } from "zustand";
import { IResources } from "../interfaces/IResources";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { EngineStoreState } from "./engineStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { createResources } from "../Models/createResources";
import { calcNewResources } from "../utils/calcNewResources";

export interface ResourcesStoreState extends IResources {
  // increaseResources: (resources: Partial<IResources>)  => void
  decreaseResources: (cost: Partial<IResources>) => void;
  getResources: () => IResources;
  getMaxResources: () => IResources;
  increaseResources(cost: Partial<IResources>): void;
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
  getMaxResources: () => {
    const maxResource = createResources();

    get().buildings.forEach((building) => {
      if(building?.increaseMax?.resources) {
        Object.keys(building.increaseMax.resources).forEach((key) => {
          const resourceKey = key as keyof IResources;
          maxResource[resourceKey] += building.increaseMax?.resources[resourceKey] ?? 0;
        });
      }
    })

    return maxResource;
  },
  increaseResources: (cost) => {
    const newResources = calcNewResources(cost, get().getResources(), "increase");
    const maxResources = get().getMaxResources();

    Object.keys(newResources).forEach((key) => {
      const resourceKey = key as keyof IResources;
      if (newResources[resourceKey] && maxResources[resourceKey]) {
        if (newResources[resourceKey] > maxResources[resourceKey]) {
          newResources[resourceKey] = maxResources[resourceKey];
        }
      }
    });

    set(() => ({ ...newResources }));
  },
  resetResourcesStore: () => {
    set(() => initResources());
  },
});
