import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { BuildingType, IBuilding } from '../interfaces/IBuilding';

interface ResourcesStore {
  tick: number;
  buildings: IBuilding[];
  increaseTick: (by: number) => void;
  wheat: number;
  increaseWheat: (by: number) => void;
  setBuilding: (key: string, type: BuildingType) => void;
  reset: () =>void;
}




function initBuildings(): IBuilding[] {
  const buildings: IBuilding[] = [];

  for(let i = 0; i < 4; i++) {
    buildings.push(
      {
        key: crypto.randomUUID(),
        type: "nothing",
      }
    )
  }

  return buildings;
}

function getNewBuildings(state: ResourcesStore, key: string, type:BuildingType ) {
  const index = state.buildings.findIndex((building) => building.key === key)
  if(index > -1) {
    const newBuildings = [...state.buildings]
    newBuildings[index] = {
      key,
      type
    }
    return newBuildings
  }
  return state.buildings
}

export const useResourcesStore = create<ResourcesStore>()(
  devtools(
    persist(
      (set) => ({
        tick: 0,
        buildings: initBuildings(),
        setBuilding: (key, type) => set((state) => ({ buildings: getNewBuildings(state, key, type)})),
        increaseTick: (by) => set((state) => ({ tick: state.tick + by })),
        wheat: 0,
        increaseWheat: (by) => set((state) => ({ wheat: state.wheat + by })),
        reset: () => set(() => ({
          tick: 0,
          buildings: initBuildings(),
          wheat: 0
        }))
      }),
      {
        name: 'Ressource-storage',
      },
    ),
  ),
)