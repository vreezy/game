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
  decreaseResources: (resources: Partial<IResources>)  => void
  reset: () =>void;
}

function getNewResources(cost: Partial<IResources>, state: ResourcesStore): Partial<IResources> {
  
  const newResources: Partial<IResources> = {}
  Object.keys(cost).forEach((key) => {
    if(cost[key as keyof IResources]) {
      newResources[key as keyof IResources] = state[key as keyof IResources] - (cost[key as keyof IResources] ?? 0)
    }
    
  })
    
  return newResources
}

export const useResourcesStore = create<ResourcesStore>()(
  devtools(
    persist(
      (set) => ({
        age: 0,
        increaseAge: () => set((state) => ({ age: state.age + 1 })),
        tick: 0,
        increaseTick: (by) => set((state) => ({ tick: state.tick + by })),
        wheat: 0,
        increaseWheat: (by) => set((state) => ({ wheat: state.wheat + by })),
        decreaseWheat: (by) => set((state) => ({ wheat: state.wheat - by })),
        wood: 0,
        increaseWood: (by) => set((state) => ({ wood: state.wood + by })),
        decreaseWood: (by) => set((state) => ({ wood: state.wood - by })),
        stone: 0,
        increaseStone: (by) => set((state) => ({ stone: state.stone + by })),
        decreaseStone: (by) => set((state) => ({ stone: state.stone - by })),
        faith: 0,
        increaseFaith: (by) => set((state) => ({ faith: state.faith + by })),
        decreaseFaith: (by) => set((state) => ({ faith: state.faith - by })),
        trust: 0,
        increaseTrust: (by) => set((state) => ({ trust: state.trust + by })),
        decreaseTrust: (by) => set((state) => ({ trust: state.trust - by })),
        happiness: 0,
        increaseHappiness: (by) => set((state) => ({ happiness: state.happiness + by })),
        decreaseHappiness: (by) => set((state) => ({ happiness: state.happiness - by })),
        gold: 0,
        increaseGold: (by) => set((state) => ({ gold: state.gold + by })),
        decreaseGold: (by) => set((state) => ({ gold: state.gold - by })),
        decreaseResources: (resources: Partial<IResources>) => set((state) => (getNewResources(resources, state))),
        reset: () => set(() => ({
          age: 0,
          tick: 0,
          wheat: 0,
          wood: 0,
          stone: 0,
          faith: 0,
          trust: 0,
          happiness: 0,
          gold: 2
        }))
      }),
      {
        name: 'Ressource-storage',
      },
    ),
  ),
)