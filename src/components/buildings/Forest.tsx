import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import React from "react"
import { BuildingProps } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"




export function Forest(props: Readonly<BuildingProps>): React.ReactElement {
    const [tick, increaseWood] = useResourcesStore(
      useShallow((state) => [state.tick, state.increaseWood]),
    )

    const [setBuilding] = useBuildingStore(
      useShallow((state) => [state.setBuilding]),
    )

    React.useEffect(() => {
      if(tick > props.building.createdTick && tick % 1 === 0) {
        increaseWood(1);

      }
    }, [tick, props.building.createdTick, increaseWood])

  return (
    <div>
      Forest <br/>
      created: {props.building.createdTick}
      <button onClick={() => setBuilding(props.building.key, "nothing", tick)}>Sell</button>
      

    </div>
  )
}