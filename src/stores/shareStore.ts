import { StateCreator } from "zustand"
import { BuildingsStoreState } from "./buildingsStore"
import { DemographyStoreState } from "./demographyStore"
import { EngineStoreState } from "./engineStore"
import { ResourcesStoreState } from "./resourcesStore"
import { calcNewResources } from "../utils/calcNewResources"
import { IResources } from "../interfaces/IResources"
import { getMaxValuesFromResources } from "../utils/getMaxValuesFromResources"
// import { IResources } from "../interfaces/IResources"

export interface SharedStoreState {
  getMaxResources: () => Partial<IResources>
  increaseResources(cost: Partial<IResources>): void
  // increaseResourcesX: (resources: Partial<IResources>)  => void
}

export const sharedStore: StateCreator<
  BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState & SharedStoreState,
  [],
  [],
  SharedStoreState
> = (set, get) => ({
  getMaxResources: () => {
    return getMaxValuesFromResources(get().buildings.map(b => b.increaseMax?.resources).filter((resource): resource is Partial<IResources> => resource !== undefined))
  },
  increaseResources: (cost) => {
    const resources = get().resources()
    
    const newResources = calcNewResources(cost, resources, "increase")
    const maxResources = get().getMaxResources()
    Object.keys(newResources).forEach((key) => {
      const resourceKey = key as keyof IResources;
      if(newResources[resourceKey] && maxResources[resourceKey]) {
        if(newResources[resourceKey] > maxResources[resourceKey]) {
          newResources[resourceKey] = maxResources[resourceKey];
        }
      }
    })

    set(() => ({...newResources}))


   
  }
  
  // increaseResourcesX: (resources) => {

  //   const maxPopulation = get().buildings.map(b => b.maxPopulation).reduce((total, val) => total + val, 0)
    
  //   // you can reuse previous methods
  //   get().addBear()
  //   get().addFish()
  //   // or do them from scratch
  //   // set((state) => ({ bears: state.bears + 1, fishes: state.fishes + 1 })
  // },
  
})