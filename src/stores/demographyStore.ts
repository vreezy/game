import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


export interface IDemography {
  age: number;
  tick: number;
}

interface DemographyStore extends IDemography{
  increaseTick: () => void;
  increaseDemographies: (demographies: Partial<IDemography>)  => void
  decreaseDemographies: (demographies: Partial<IDemography>)  => void
  demographies: () => IDemography;
  reset: () =>void;
}

function getNewDemographies(cost: Partial<IDemography>, state: DemographyStore, operator: "increase" | "decrease"): Partial<IDemography> {
  
  const newResources: Partial<IDemography> = {}
  Object.keys(cost).forEach((key) => {
    const resourceKey = key as keyof IDemography;
    if(cost[resourceKey] && operator === "decrease") {
      newResources[resourceKey] = state[resourceKey] - (cost[resourceKey] ?? 0);
    }

    if(cost[resourceKey] && operator === "increase") {
      newResources[resourceKey] = state[resourceKey] + (cost[resourceKey] ?? 0);
    }
  })
    
  return newResources
}

function initDemographies(): IDemography {
  const d: IDemography = {
    tick: 0,
    age: 0,
  }
  return d
}

export const useDemographyStore = create<DemographyStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initDemographies(),
        increaseTick: () => set((state) => ({ tick: state.tick + 1 })),
        increaseDemographies: (demographies: Partial<IDemography>) => set((state) => (getNewDemographies(demographies, state, "increase"))),
        decreaseDemographies: (demographies: Partial<IDemography>) => set((state) => (getNewDemographies(demographies, state, "decrease"))),
        demographies: () => { 
          const r: IDemography = {
            tick: get().tick,
            age: get().age,
          }
          return r
        },
        
        
        reset: () => { set(() => (initDemographies())) }
      }),
      {
        name: 'Demography-storage',
      },
    ),
  ),
)