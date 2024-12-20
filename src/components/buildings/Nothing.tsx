import React from "react"
import { useShallow } from "zustand/shallow"


import { BuildingProps } from "./Building"

import { BuildingType } from "../../interfaces/IBuilding"
import { hasEnoughResources } from "../../utils/hasEnoughResources"
import { BUILDINGS } from "../const/buildings"

import { useBoundStore } from "../../stores/boundStore"

export function Nothing(props: Readonly<BuildingProps>): React.ReactElement {
  const [tick, age, isBuildingAvailable, setBuilding, decreaseResources, resources] = useBoundStore(
    useShallow((state) => [state.tick, state.age, state.isBuildingAvailable ,state.setBuilding, state.decreaseResources, state.getResources,]),
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
          .filter(b => b.age <= age)
          .filter(b => b.type !== "nothing")
          .filter(b => isBuildingAvailable(b.type))
          .map(b => {
          return (
            <li key={b.type}><button disabled={_isDisabled(b.type)} onClick={() => _handleBuilding(b.type)}>{b.displayName} cost:{JSON.stringify(b.cost)}</button></li>      
          )
        })}
      </ul>

    </div>
  )
}