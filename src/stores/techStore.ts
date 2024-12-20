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
  lastPayTechTick: number;
  resetTechStore: () => void;
  getTechTree: () => ITechTree;
  payTech: (treeKey: keyof ITechTree, techKey: string, amount: number, tick: number) => void;
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
      culture: get().culture,
      economyTech: get().economyTech,
      infrastructure: get().infrastructure,
      military: get().military,
      science: get().science,
    }
  },
  payTech: (treeKey, techKey, amount, tick) => {
    const tree = { ...get().getTechTree()} // clone;
    
    let shouldSet = false;
    tree[treeKey].forEach((tech) => {
      if(tech.key === techKey) {
        const newAmount = tech.paid + amount;
        if(tech.paid === tech.cost) {
          return;
        }

        if(newAmount <= tech.cost) {
          tech.paid = newAmount;
          shouldSet = true;
        }

        if(newAmount > tech.cost) {
          tech.paid = tech.cost;
          shouldSet = true;
        }
      }
    });

    if(shouldSet) {
      set(() => ({
        ...tree,
        lastPayTechTick: tick,
      }));
    }
    
  },
  setActiveTech: (techKey) => {
    set(() => (
      {
        activeTechKey: techKey,
      }
    ))
  },
  resetTechStore: () => {
    set(() => ({
      ...initTechTree(),
      activeTechKey: "",
      lastPayTechTick: -1,
    }));
  },
});
