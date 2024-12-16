import { useShallow } from "zustand/shallow"

import React from "react"
import { BuildingProps } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"
import { useResourcesStore } from "../../stores/resourcesStore"
import { BuildingType } from "../../interfaces/IBuilding"
import { IResources } from "../../interfaces/IResources"
import { hasEnoughResources } from "../../utils/hasEnoughResources"


interface BuildingCost {
  displayName: string,
  type: BuildingType,
  cost: Partial<IResources> 
}

const buildingCosts: BuildingCost[] = [
  {
    displayName: "Wheat Field",
    type: "wheatField",
    cost: {
      population: 1
    }
  },
  {
    displayName: "Forest",
    type: "forest",
    cost: {
      population: 1
    }
  },
  { 
    displayName: "Quarry",
    type: "quarry",
    cost: {
      population: 4,
      happiness: 1,
      wheat: 20,
      wood: 50
    }
  },
  { 
    displayName: "Hut",
    type: "hut",
    cost: {
      wheat: 10,
      wood: 20
    }
  }
]

export function Nothing(props: Readonly<BuildingProps>): React.ReactElement {
  const [setBuilding] = useBuildingStore(
    useShallow((state) => [state.setBuilding]),
  )

  const [decreaseResources, resources] = useResourcesStore(
    useShallow((state) => [state.decreaseResources, state.resources]),
  )

  const [tick] = useResourcesStore(
    useShallow((state) => [state.tick]),
  )

  function _handleBuilding(type: BuildingType): void {
    const cost =  buildingCosts.find(bc => bc.type === type)?.cost
    if(cost && hasEnoughResources(resources(), cost) ) {
      setBuilding(props.building.key, type, tick)
      decreaseResources(cost)
    }
  }

  function _isDisabled(type: BuildingType): boolean {
    const cost =  buildingCosts.find(bc => bc.type === type)?.cost
    if(cost) {
      return !hasEnoughResources(resources(), cost)  
    }
    return false
  }

  return (
    <div>
      Build: <br/>
      <ul>
        {buildingCosts.map(b => {
          return (
            <li key={b.type}><button disabled={_isDisabled(b.type)} onClick={() => _handleBuilding(b.type)}>{b.displayName} cost:{JSON.stringify(b.cost)}</button></li>      
          )
        })}
      </ul>

    </div>
  )
}