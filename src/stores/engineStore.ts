import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";

export interface IEngine {
  tick: number;
  speed: number;
  showTechTree: boolean;
}

export interface EngineStoreState extends IEngine {
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
  BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState & TechStoreState & SharedStoreState,
  [],
  [],
  EngineStoreState
> = (set) => ({
  ...initEngine(),
  increaseTick: () => set((state) => ({ tick: state.tick + 1 })),
  setSpeed: (speed: number) => set(() => ({ speed: speed })),
  toggleTechTree: () => set((state) => ({ showTechTree: !state.showTechTree })),
  resetEngineStore: () => {
    set(() => initEngine());
  },
});
