import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { BuildingType, IBuilding } from '../interfaces/IBuilding';
import { BUILDINGS } from '../components/const/buildings';

interface BuildingsStore {
  buildings: IBuilding[];
  setBuilding: (key: string, type: BuildingType, createdTick: number) => void;
  reset: () =>void;
}

function getBuilding(type: BuildingType): IBuilding {
  const building = BUILDINGS.find(b => b.type === type);
  if (!building) {
    throw new Error(`Building of type ${type} not found`);
  }
  return building;
  
}

function initBuildings(): IBuilding[] {
  const buildings: IBuilding[] = [];

  for(let i = 0; i < 4; i++) {
    buildings.push(
      {
        ...getBuilding("nothing"),
        key: crypto.randomUUID(),
      }
    )
  }

  return buildings;
}

function getNewBuildings(state: BuildingsStore, key: string, type:BuildingType, createdTick: number ) {
  const index = state.buildings.findIndex((building) => building.key === key)
  if(index > -1) {
    const newBuildings = [...state.buildings]
    newBuildings[index] = {
      ...getBuilding(type),
      key,
      createdTick
    }
    return newBuildings
  }
  return state.buildings
}

export const useBuildingStore = create<BuildingsStore>()(
  devtools(
    persist(
      (set) => ({

        buildings: initBuildings(),
        setBuilding: (key, type, createdTick) => set((state) => ({ buildings: getNewBuildings(state, key, type, createdTick)})),
        reset: () => set(() => ({

          buildings: initBuildings(),

        }))
      }),
      {
        name: 'Buildings-storage',
      },
    ),
  ),
)