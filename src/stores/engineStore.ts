import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { MapStoreState } from "./mapStore";
import { UnitStoreState } from "./unitStore";

export interface IEngine {
  tick: number;
  speed: number;
  showTechTree: boolean;
}

export interface EngineStoreState extends IEngine {
  getTick: () => number;
  increaseTick: () => void;
  setSpeed: (speed: number) => void;
  toggleTechTree: () => void;
  resetEngineStore: () => void;
}

function initEngine(): IEngine {
  const e: IEngine = {
    tick: 0,
    speed: 1,
    showTechTree: false
  };
  return e;
}

export const engineStore: StateCreator<
  BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState & TechStoreState & MapStoreState & UnitStoreState & SharedStoreState,
  [],
  [],
  EngineStoreState
> = (set, get) => ({
  ...initEngine(),
  getTick: () => get().tick,
  increaseTick: () => set((state) => ({ tick: state.tick + 1 })),
  setSpeed: (speed: number) => set(() => ({ speed: speed })),
  toggleTechTree: () => set((state) => ({ showTechTree: !state.showTechTree })),
  resetEngineStore: () => {
    set(() => initEngine());
  },
});
