import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import React from "react"
import { BuildingProps } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"




export function WheatField(props: Readonly<BuildingProps>): React.ReactElement {
    const [tick, increaseWheat] = useResourcesStore(
      useShallow((state) => [state.tick, state.increaseWheat]),
    )

    const [setBuilding] = useBuildingStore(
      useShallow((state) => [state.setBuilding]),
    )

    React.useEffect(() => {
      if(tick > props.building.createdTick && tick % 1 === 0) {
        increaseWheat(1);

      }
    }, [tick, props.building.createdTick, increaseWheat])

  return (
    <div>
      Wheat-Farm <br/>
      created: {props.building.createdTick}
      <button onClick={() => setBuilding(props.building.key, "nothing", tick)}>Sell</button>
      

    </div>
  )
}