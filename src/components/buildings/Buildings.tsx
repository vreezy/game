import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import { Building } from "./Building"


export function Buildings(): React.ReactElement {
  const [buildings] = useResourcesStore(
    useShallow((state) => [state.buildings]),
  )


  return (
    <div>
      {buildings.map((building) => <Building key={building.key} building={building} />)}
    </div>
  )
}