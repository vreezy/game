import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { initTechTree } from "../components/const/techs";
import { EngineStoreState } from "./engineStore";
import { ITechTree } from "../interfaces/ITechTree";
import { BuildingType } from "../interfaces/IBuilding";

export interface TechStoreState extends ITechTree {
  activeTechKey: string;
  lastPayTechTick: number; // we use this to render changes in TechTree
  resetTechStore: () => void;
  getTechTree: () => ITechTree;
  payTech: (
    treeKey: keyof ITechTree,
    techKey: string,
    amount: number,
    tick: number
  ) => void;
  setActiveTech: (techKey: string) => void;
}

export const techStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    TechStoreState &
    SharedStoreState,
  [],
  [],
  TechStoreState
> = (set, get) => ({
  ...initTechTree(),
  lastPayTechTick: -1,
  activeTechKey: "",
  getTechTree: () => {
    return {
      cultureTech: get().cultureTech,
      economyTech: get().economyTech,
      infrastructureTech: get().infrastructureTech,
      militaryTech: get().militaryTech,
      scienceTech: get().scienceTech,
    };
  },
  payTech: (treeKey, techKey, amount, tick) => {
    const tree = { ...get().getTechTree() }; // clone;

    let shouldSet = false;
    const newAvailableBuildingTypes: BuildingType[] = [
      ...get().availableBuildingTypes,
    ];

    tree[treeKey].forEach((tech) => {
      if (tech.key === techKey) {
        const newAmount = tech.paid + amount;
        if (tech.paid === tech.cost) {
          return;
        }

        if (newAmount < tech.cost) {
          tech.paid = newAmount;
          shouldSet = true;
        }

        if (newAmount >= tech.cost) {
          tech.paid = tech.cost; // do not allow overpay
          shouldSet = true;

          // unlock new tech
          if (tech.unlocks && tech.unlocks.length > 0) {
            tech.unlocks.forEach((type) => {
              if (!newAvailableBuildingTypes.includes(type)) {
                newAvailableBuildingTypes.push(type);
              }
            });
          }
        }
      }
    });

    if (shouldSet) {
      set(() => ({
        ...tree,
        lastPayTechTick: tick,
        availableBuildingTypes: newAvailableBuildingTypes,
      }));
    }
  },
  setActiveTech: (techKey) => {
    set(() => ({
      activeTechKey: techKey,
    }));
  },
  resetTechStore: () => {
    set(() => ({
      ...initTechTree(),
      activeTechKey: "",
      lastPayTechTick: -1,
    }));
  },
});
