import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";

export interface IEngine {
  tick: number;
  speed: number;
}

export interface EngineStoreState extends IEngine {
  increaseTick: () => void;
  setSpeed: (speed: number) => void;
  resetEngineStore: () => void;
}

function initEngine(): IEngine {
  const e: IEngine = {
    tick: 0,
    speed: 1,
  };
  return e;
}

export const engineStore: StateCreator<
  BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState& SharedStoreState,
  [],
  [],
  EngineStoreState
> = (set) => ({
  ...initEngine(),
  increaseTick: () => set((state) => ({ tick: state.tick + 1 })),
  setSpeed: (speed: number) => set(() => ({ speed: speed })),
  resetEngineStore: () => {
    set(() => initEngine());
  },
});
