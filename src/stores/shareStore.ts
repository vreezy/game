import { StateCreator } from "zustand"
import { BuildingsStoreState } from "./buildingsStore"
import { DemographyStoreState } from "./demographyStore"
import { EngineStoreState } from "./engineStore"
import { ResourcesStoreState } from "./resourcesStore"
// import { IResources } from "../interfaces/IResources"

export interface SharedStoreState {
  
  getMuh(): void
  // increaseResourcesX: (resources: Partial<IResources>)  => void
}

export const sharedStore: StateCreator<
  BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState,
  [],
  [],
  SharedStoreState
> = (set, get) => ({
  muh: 'muh',
  getMuh: () => {
    const x = get().gold
    console.log('muh', x)
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