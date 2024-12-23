import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { MapStoreState } from "./mapStore";
import { EngineStoreState } from "./engineStore";

export interface IUnitStore {
  units: unknown[];
  
}

export interface UnitStoreState extends IUnitStore {
  resetUnitStore: () => void;
}

function initUnit(): IUnitStore {
  const u: IUnitStore = {
    units: [],
  };
  return u;
}

export const unitStore: StateCreator<
  BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState & TechStoreState & MapStoreState & UnitStoreState & SharedStoreState,
  [],
  [],
  UnitStoreState
> = (set) => ({
  ...initUnit(),
  resetUnitStore: () => {
    set(() => ({...initUnit()}));
  },
});
