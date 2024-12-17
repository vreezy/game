import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { IResources } from '../interfaces/IResources';

export interface IBase {
  age: number;
  tick: number;
}

interface ResourcesStore extends IBase, IResources{
  increaseAge: () => void;
  increaseTick: (by: number) => void;
  increasePopulation: (by: number) => void;
  decreasePopulation: (by: number) => void;
  increaseWheat: (by: number) => void;
  decreaseWheat: (by: number) => void;
  increaseWood: (by: number) => void;
  decreaseWood: (by: number) => void;
  increaseStone: (by: number) => void;
  decreaseStone: (by: number) => void;
  increaseFaith: (by: number) => void;
  decreaseFaith: (by: number) => void;
  increaseTrust: (by: number) => void;
  decreaseTrust: (by: number) => void;
  increaseHappiness: (by: number) => void;
  decreaseHappiness: (by: number) => void;
  increaseGold: (by: number) => void;
  decreaseGold: (by: number) => void;
  increaseResources: (resources: Partial<IResources>)  => void
  decreaseResources: (resources: Partial<IResources>)  => void
  resources: () => IResources;
  reset: () =>void;
}

function getNewResources(cost: Partial<IResources>, state: ResourcesStore, operator: "increase" | "decrease"): Partial<IResources> {
  
  const newResources: Partial<IResources> = {}
  Object.keys(cost).forEach((key) => {
    const resourceKey = key as keyof IResources;
    if(cost[resourceKey] && operator === "decrease") {
      newResources[resourceKey] = state[resourceKey] - (cost[resourceKey] ?? 0);
    }

    if(cost[resourceKey] && operator === "increase") {
      newResources[resourceKey] = state[resourceKey] + (cost[resourceKey] ?? 0);
    }
  })
    
  return newResources
}

function initResources(): IResources & IBase {
  const r: IResources & IBase = {
    age: 0,
    tick: 0,
    wheat: 0,
    wood: 0,
    stone: 0,
    faith: 0,
    trust: 0,
    happiness: 0,
    gold: 0,
    population: 5
  }
  return r
}

export const useResourcesStore = create<ResourcesStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initResources(),
        increaseAge: () => set((state) => ({ age: state.age + 1 })),
        increaseTick: (by) => set((state) => ({ tick: state.tick + by })),
        increasePopulation: (by) => set((state) => ({ population: state.population + by })),
        decreasePopulation: (by) => set((state) => ({ population: state.population - by })),
        increaseWheat: (by) => set((state) => ({ wheat: state.wheat + by })),
        decreaseWheat: (by) => set((state) => ({ wheat: state.wheat - by })),
        increaseWood: (by) => set((state) => ({ wood: state.wood + by })),
        decreaseWood: (by) => set((state) => ({ wood: state.wood - by })),
        increaseStone: (by) => set((state) => ({ stone: state.stone + by })),
        decreaseStone: (by) => set((state) => ({ stone: state.stone - by })),
        increaseFaith: (by) => set((state) => ({ faith: state.faith + by })),
        decreaseFaith: (by) => set((state) => ({ faith: state.faith - by })),
        increaseTrust: (by) => set((state) => ({ trust: state.trust + by })),
        decreaseTrust: (by) => set((state) => ({ trust: state.trust - by })),
        increaseHappiness: (by) => set((state) => ({ happiness: state.happiness + by })),
        decreaseHappiness: (by) => set((state) => ({ happiness: state.happiness - by })),
        increaseGold: (by) => set((state) => ({ gold: state.gold + by })),
        decreaseGold: (by) => set((state) => ({ gold: state.gold - by })),
        increaseResources: (resources: Partial<IResources>) => set((state) => (getNewResources(resources, state, "increase"))),
        decreaseResources: (resources: Partial<IResources>) => set((state) => (getNewResources(resources, state, "decrease"))),
        resources: () => { 
          const r: IResources = {
            wheat: get().wheat,
            wood: get().wood,
            stone: get().stone,
            faith: get().faith,
            trust: get().trust,
            happiness: get().happiness,
            gold: get().gold ,
            population: get().population
          }
          return r
        },
        
        
        reset: () => { set(() => (initResources())) }
      }),
      {
        name: 'Resource-storage',
      },
    ),
  ),
)