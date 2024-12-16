import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import React from "react"
import { BuildingProps } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"




export function Quarry(props: Readonly<BuildingProps>): React.ReactElement {
    const [tick, increaseStone] = useResourcesStore(
      useShallow((state) => [state.tick, state.increaseStone]),
    )

    const [setBuilding] = useBuildingStore(
      useShallow((state) => [state.setBuilding]),
    )

    React.useEffect(() => {
      if(tick > props.building.createdTick && tick % 2 === 0) {
        increaseStone(1);

      }
    }, [tick, props.building.createdTick, increaseStone])

  return (
    <div>
      Quarry <br/>
      created: {props.building.createdTick}
      <button onClick={() => setBuilding(props.building.key, "nothing", tick)}>Sell</button>
      

    </div>
  )
}