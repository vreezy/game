

import React from "react"
import { useResourcesStore } from "../../stores/resourcesStore"
import { useBuildingStore } from "../../stores/buildingsStore"

export function Options(): React.ReactElement {
  const resetResources = useResourcesStore((state) => state.reset)
  const resetBuildings = useBuildingStore((state) => state.reset)

  function _handleReset(): void {
    resetResources()
    resetBuildings()    
  }

  return (
    <ul>
      <li><button onClick={() => _handleReset()}>reset</button></li>
    </ul>
  )
}

