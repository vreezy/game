import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { MapStoreState } from "./mapStore";
import { EngineStoreState } from "./engineStore";
import { IUnit } from "../interfaces/IUnit";

export interface IUnitStore {
  units: IUnit[];
  
}

export interface UnitStoreState extends IUnitStore {
  getUnits: () => IUnit[];
  addUnits: (units: IUnit[]) => void;
  addUnit: (unit: IUnit) => void;
  removeUnit: (key: string) => void;
  updateUnit: (unit: IUnit) => void;
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
> = (set, get) => ({
  ...initUnit(),
  getUnits: () => get().units,
  addUnit: (unit: IUnit) => set((state) => ({ units: [...state.units, unit] })),
  addUnits: (units: IUnit[]) => set((state) => ({ units: [...state.units, ...units] })),
  removeUnit: (key: string) => set((state) => ({ units: state.units.filter((u) => u.key !== key) })),
  updateUnit: (unit: IUnit) => {
    set((state) => ({ 
      units: [...state.units.filter((u) => u.key !== unit.key), unit]
    }))
  },
  resetUnitStore: () => {
    set(() => ({...initUnit()}));
  },
});
