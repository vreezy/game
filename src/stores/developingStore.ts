import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { ITechTree, initTechTree } from "../components/const/developings";
import { EngineStoreState } from "./engineStore";

export interface DevelopingStoreState extends ITechTree {
  resetDevelopingStore: () => void;
  getDeveloping: () => ITechTree;
  payTech: (treeKey: keyof ITechTree, techKey: string, amount: number) => void;
  setTechActive: (treeKey: keyof ITechTree, techKey: string) => void;
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
  ...initTechTree(),
  getDeveloping: () => {
    return {
      culture: get().culture,
      economy: get().economy,
      infrastructure: get().infrastructure,
      military: get().military,
      science: get().science,
    }
  },
  payTech: (treeKey, techKey, amount) => {
    const tree = { ...get().getDeveloping()} // clone;
    
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
  setTechActive: (treeKey, techKey) => {
    const tree = { ...get().getDeveloping()} // clone;
    const treeKeys = Object.keys(tree) as (keyof ITechTree)[];

    // set all active to false
    treeKeys.forEach((treeKey) => {
      tree[treeKey].forEach((item) => {
        item.active = false;
      });
    });

    tree[treeKey].forEach((item) => {
      if(item.key === techKey) {
        item.active = true;
      }
    });

    set(() => tree);

  },
  resetDevelopingStore: () => {
    set(() => (initTechTree()));
  },
});
