import { useShallow } from "zustand/shallow"

import React from "react"
import { BuildingProps } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"
import { useResourcesStore } from "../../stores/resourcesStore"
import { BuildingType } from "../../interfaces/IBuilding"
import { hasEnoughResources } from "../../utils/hasEnoughResources"
import { BUILDINGS } from "../const/buildings"

export function Nothing(props: Readonly<BuildingProps>): React.ReactElement {
  const [setBuilding] = useBuildingStore(
    useShallow((state) => [state.setBuilding]),
  )

  const [decreaseResources, resources, age] = useResourcesStore(
    useShallow((state) => [state.decreaseResources, state.resources, state.age]),
  )

  const [tick] = useResourcesStore(
    useShallow((state) => [state.tick]),
  )

  function _handleBuilding(type: BuildingType): void {
    const cost =  BUILDINGS.find(b => b.type === type)?.cost
    if(cost && hasEnoughResources(resources(), cost) ) {
      setBuilding(props.building.key, type, tick)
      decreaseResources(cost)
    }
  }

  function _isDisabled(type: BuildingType): boolean {
    const cost = BUILDINGS.find(b => b.type === type)?.cost
    if(cost) {
      return !hasEnoughResources(resources(), cost)  
    }
    return false
  }

  return (
    <div>
      Build: <br/>
      <ul>
        {BUILDINGS
          .filter(b => b.age >= age)
          .filter(b => b.type !== "nothing")
          .map(b => {
          return (
            <li key={b.type}><button disabled={_isDisabled(b.type)} onClick={() => _handleBuilding(b.type)}>{b.displayName} cost:{JSON.stringify(b.cost)}</button></li>      
          )
        })}
      </ul>

    </div>
  )
}