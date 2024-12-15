

import React from "react"
import { useResourcesStore } from "../../stores/resourcesStore"

export function Options(): React.ReactElement {
  const reset = useResourcesStore((state) => state.reset)

  return (
    <ul>
      <li><button onClick={() => reset()}>reset</button></li>
    </ul>
  )
}