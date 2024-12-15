import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import React from "react"




export function WheatFarm(): React.ReactElement {
    const [tick, increaseWheat] = useResourcesStore(
      useShallow((state) => [state.tick, state.increaseWheat]),
    )

    React.useEffect(() => {
      if(tick % 1 === 0) {
        increaseWheat(1);

      }
    }, [tick, increaseWheat])

  return (
    <div>
      Wheat-Farm <br/>

    </div>
  )
}