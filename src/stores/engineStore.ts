import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


export interface IEngine {

  tick: number;
  speed: number;
}

interface EngineStore extends IEngine{
  increaseTick: () => void;
  setSpeed: (speed: number) => void;
  reset: () =>void;
}

function initEngine(): IEngine {
  const e: IEngine = {
    tick: 0,
    speed: 1
  }
  return e
}

export const useEngineStore = create<EngineStore>()(
  devtools(
    persist(
      (set) => ({
        ...initEngine(),
        increaseTick: () => set((state) => ({ tick: state.tick + 1 })),
        setSpeed: (speed: number) => set(() => ({ speed: speed })),
        reset: () => { set(() => (initEngine())) }
      }),
      {
        name: 'Engine-storage',
      },
    ),
  ),
)