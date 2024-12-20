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
  resetTechStore: () => void;
  getTechs: () => ITechTree;
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
  activeTechKey: undefined,
  getTechs: () => {
    return {
      culture: get().culture,
      economy: get().economy,
      infrastructure: get().infrastructure,
      military: get().military,
      science: get().science,
    }
  },
  payTech: (treeKey, techKey, amount) => {
    const tree = { ...get().getTechs()} // clone;
    
    tree[treeKey].forEach((tech) => {
      if(tech.key === techKey) {
        const newAmount = tech.paid + amount;
        if(newAmount <= tech.cost) {
          tech.paid = newAmount;
        }

        if(newAmount > tech.cost) {
          tech.paid = tech.cost;
        }
      }
    });

    set(() => tree);
  },
  setActiveTech: (techKey) => {
    set(() => ({activeTechKey: techKey}))
  },
  resetTechStore: () => {
    set(() => (initTechTree()));
  },
});
