import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { IDeveloping, initDeveloping } from "../components/const/developings";
import { EngineStoreState } from "./engineStore";

export interface DevelopingStoreState extends IDeveloping {
  resetDevelopingStore: () => void;
  getDeveloping: () => IDeveloping;
}

export const developingStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    DevelopingStoreState &
    SharedStoreState,
  [],
  [],
  DevelopingStoreState
> = (set, get) => ({
  ...initDeveloping(),
  getDeveloping: () => {
    return {
      culture: get().culture,
      economy: get().economy,
      infrastructure: get().infrastructure,
      military: get().military,
      science: get().science,
    }
  },
  resetDevelopingStore: () => {
    set(() => initDeveloping());
  },
});
