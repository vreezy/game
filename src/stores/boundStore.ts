import { create } from "zustand";
import { BuildingsStoreState, buildingStore } from "./buildingsStore";
import { demographyStore, DemographyStoreState } from "./demographyStore";
import { engineStore, EngineStoreState } from "./engineStore";
import { resourcesStore, ResourcesStoreState } from "./resourcesStore";
import { sharedStore, SharedStoreState } from "./shareStore";
import { devtools, persist } from "zustand/middleware";
import { developingStore, DevelopingStoreState } from "./developingStore";

// boundStore
//https://zustand.docs.pmnd.rs/guides/typescript#slices-pattern

export const useBoundStore = create<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    DevelopingStoreState &
    SharedStoreState
>()(
  devtools(
    persist(
      (...a) => ({
        ...buildingStore(...a),
        ...demographyStore(...a),
        ...engineStore(...a),
        ...resourcesStore(...a),
        ...developingStore(...a), 
        ...sharedStore(...a),
      }),
      {
        name: "bound-store",
      }
    )
  )
);
