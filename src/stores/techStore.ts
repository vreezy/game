import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { initTechTree } from "../components/const/techs";
import { EngineStoreState } from "./engineStore";
import { ITechTree } from "../interfaces/ITechTree";

export interface TechStoreState extends ITechTree {
  activeTechKey: string | undefined;
  payTechCount: number;
  resetTechStore: () => void;
  getTechTree: () => ITechTree;
  payTech: (treeKey: keyof ITechTree, techKey: string, amount: number) => void;
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
  payTechCount: -1,
  activeTechKey: undefined,
  getTechTree: () => {
    return {
      culture: get().culture,
      economyTech: get().economyTech,
      infrastructure: get().infrastructure,
      military: get().military,
      science: get().science,
    }
  },
  payTech: (treeKey, techKey, amount) => {
    const tree = { ...get().getTechTree()} // clone;
    
    let shouldCount = false;
    tree[treeKey].forEach((tech) => {
      if(tech.key === techKey) {
        const newAmount = tech.paid + amount;
        if(tech.paid === tech.cost) {
          return;
        }

        if(newAmount <= tech.cost) {
          tech.paid = newAmount;
          shouldCount = true;
        }

        if(newAmount > tech.cost) {
          tech.paid = tech.cost;
          shouldCount = true;
        }
      }
    });

    if(shouldCount) {
      set((state) => ({
        ...tree,
        payTechCount: state.payTechCount + 1
      }));
    }
    
  },
  setActiveTech: (techKey) => {
    set((state) => (
      {
        activeTechKey: techKey,
        payTechCount: state.payTechCount + 1
      }
    ))
  },
  resetTechStore: () => {
    set(() => ({
      ...initTechTree(),
      payTechCount: -1
    }));
  },
});
