import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface RessourceState {
  wheat: number
  increaseWheat: (by: number) => void
}

export const useRessourceStore = create<RessourceState>()(
  devtools(
    persist(
      (set) => ({
        wheat: 0,
        increaseWheat: (by) => set((state) => ({ wheat: state.wheat + by })),
      }),
      {
        name: 'Ressource-storage',
      },
    ),
  ),
)