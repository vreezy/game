import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { EngineStoreState } from "./engineStore";
import { ResourcesStoreState } from "./resourcesStore";
import { TechStoreState } from "./techStore";
import { MapStoreState } from "./mapStore";
import { UnitStoreState } from "./unitStore";

export interface SharedStoreState {
  resetSharedStore: () => void;
}

export const sharedStore: StateCreator<
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
  SharedStoreState
> = (set) => ({
  resetSharedStore: () => { set(() => ({})) }
});
