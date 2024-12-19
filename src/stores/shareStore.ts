import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { EngineStoreState } from "./engineStore";
import { ResourcesStoreState } from "./resourcesStore";
import { calcNewResources } from "../utils/calcNewResources";
import { IResources } from "../interfaces/IResources";
import { getMaxValuesFromResources } from "../utils/getMaxValuesFromResources";
import { DevelopingStoreState } from "./developingStore";
// import { IResources } from "../interfaces/IResources"

export interface SharedStoreState {
  getMaxResources: () => Partial<IResources>;
  increaseResources(cost: Partial<IResources>): void;
  resetSharedStore: () => void;
}

export const sharedStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    DevelopingStoreState &
    SharedStoreState,
  [],
  [],
  SharedStoreState
> = (set, get) => ({
  getMaxResources: () => {
    return getMaxValuesFromResources(
      get()
        .buildings.map((b) => b.increaseMax?.resources)
        .filter(
          (resource): resource is Partial<IResources> => resource !== undefined
        )
    );
  },
  increaseResources: (cost) => {
    const newResources = calcNewResources(cost, get().resources(), "increase");
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
