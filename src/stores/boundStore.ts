import { create } from "zustand";
import { BuildingsStoreState, buildingStore } from "./buildingsStore";
import { demographyStore, DemographyStoreState } from "./demographyStore";
import { engineStore, EngineStoreState } from "./engineStore";
import { resourcesStore, ResourcesStoreState } from "./resourcesStore";
import { sharedStore, SharedStoreState } from "./shareStore";
import { devtools, persist } from "zustand/middleware";
import { techStore, TechStoreState } from "./techStore";
import { mapStore, MapStoreState } from "./mapStore";
import { unitStore, UnitStoreState } from "./unitStore";

// boundStore
//https://zustand.docs.pmnd.rs/guides/typescript#slices-pattern

export const useBoundStore = create<
  BuildingsStoreState &
  DemographyStoreState &
  EngineStoreState &
  ResourcesStoreState &
  TechStoreState &
  MapStoreState &
  UnitStoreState &
  SharedStoreState
>()(
  devtools(
    persist(
      (...a) => ({
        ...buildingStore(...a),
        ...demographyStore(...a),
        ...engineStore(...a),
        ...resourcesStore(...a),
        ...techStore(...a), 
        ...mapStore(...a),
        ...unitStore(...a),
        ...sharedStore(...a),
      }),
      {
        name: "bound-store",
      }
    )
  )
);
