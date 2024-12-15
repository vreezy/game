import { useShallow } from "zustand/shallow"
import { Building } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"


export function Buildings(): React.ReactElement {
  const [buildings] = useBuildingStore(
    useShallow((state) => [state.buildings]),
  )


  return (
    <div>
      {buildings.map((building) => <Building key={building.key} building={building} />)}
    </div>
  )
}