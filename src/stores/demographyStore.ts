import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


export interface IDemography {
  age: number;
}

interface DemographyStore extends IDemography{
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
    age: 0,
  }
  return d
}

export const useDemographyStore = create<DemographyStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initDemographies(),

        increaseDemographies: (demographies: Partial<IDemography>) => set((state) => (getNewDemographies(demographies, state, "increase"))),
        decreaseDemographies: (demographies: Partial<IDemography>) => set((state) => (getNewDemographies(demographies, state, "decrease"))),
        demographies: () => { 
          const r: IDemography = {
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