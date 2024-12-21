import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { initTechTree } from "../components/const/techs";
import { EngineStoreState } from "./engineStore";
import { ITechTree } from "../interfaces/ITechTree";

export interface TechStoreState extends ITechTree {
  activeTechKey: string;
  lastPayTechTick: number; // we use this to render changes in TechTree
  resetTechStore: () => void;
  getTechTree: () => ITechTree;
  isTechAvailable: (treeKey: keyof ITechTree, techKey: string) => boolean;
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
  isTechAvailable: (treeKey, techKey) => {
    const tree = get().getTechTree();
    const techToCheck = tree[treeKey].find((tech) => tech.techKey === techKey)

    if(techToCheck && techToCheck.requiredTechKeys.length === 0) {
      return true;      
    }

    if(techToCheck) {
      return techToCheck.requiredTechKeys.every((requiredTechKey) => {
        const requiredTech = tree[treeKey].find((tech) => tech.techKey === requiredTechKey)
        if(requiredTech && requiredTech.paid === requiredTech.cost) {
          return true
        } 

        return false
      })
    }
    
    return false;
  },
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
        }
      }
    });

    if (shouldSet) {
      set(() => ({
        ...tree,
        lastPayTechTick: tick,

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
