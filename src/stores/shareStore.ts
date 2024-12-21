import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { EngineStoreState } from "./engineStore";
import { ResourcesStoreState } from "./resourcesStore";
import { calcNewResources } from "../utils/calcNewResources";
import { IResources } from "../interfaces/IResources";

import { TechStoreState } from "./techStore";

import { createResources } from "../Models/createResources";
// import { IResources } from "../interfaces/IResources"

export interface SharedStoreState {
  getMaxResources: () => IResources;
  increaseResources(cost: Partial<IResources>): void;
  resetSharedStore: () => void;
}

export const sharedStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    TechStoreState &
    SharedStoreState,
  [],
  [],
  SharedStoreState
> = (set, get) => ({
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
  resetSharedStore: () => { set(() => ({})) }
});
