import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import React from "react"
import { BuildingProps } from "./Building"




export function Nothing(props: Readonly<BuildingProps>): React.ReactElement {
    const [setBuilding] = useResourcesStore(
      useShallow((state) => [state.setBuilding]),
    )



  return (
    <div>
      Build: <br/>
      <ul>
      <li><button onClick={() => setBuilding(props.building.key, "wheatFarm")}>WheatFarm</button></li>
      </ul>

    </div>
  )
}