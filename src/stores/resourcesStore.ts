import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ResourcesStore {
  tick: number;
  increaseTick: (by: number) => void;
  wheat: number;
  increaseWheat: (by: number) => void;
}

export const useResourcesStore = create<ResourcesStore>()(
  devtools(
    persist(
      (set) => ({
        tick: 0,
        increaseTick: (by) => set((state) => ({ tick: state.tick + by })),
        wheat: 0,
        increaseWheat: (by) => set((state) => ({ wheat: state.wheat + by })),
      }),
      {
        name: 'Ressource-storage',
      },
    ),
  ),
)