import { StateCreator } from 'zustand'
import { IResources } from '../interfaces/IResources';
import { BuildingsStoreState } from './buildingsStore';
import { DemographyStoreState } from './demographyStore';
import { EngineStoreState } from './engineStore';


export interface ResourcesStoreState extends IResources{
  increaseResources: (resources: Partial<IResources>)  => void
  decreaseResources: (resources: Partial<IResources>)  => void
  resources: () => IResources;
  resetResourcesStore: () =>void;
}

function getNewResources(cost: Partial<IResources>, state: ResourcesStoreState, operator: "increase" | "decrease"): Partial<IResources> {
  
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

function initResources(): IResources {
  const r: IResources = {
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

export const resourcesStore:StateCreator<
BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState,
[],
[],
ResourcesStoreState
> =
      (set, get) => ({
        ...initResources(),
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
        resetResourcesStore: () => { set(() => (initResources())) }
      })