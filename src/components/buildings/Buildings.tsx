import { useShallow } from "zustand/shallow"
import { Building } from "./Building"
import { useBoundStore } from "../../stores/boundStore"


export function Buildings(): React.ReactElement {
  const [buildings] = useBoundStore(
    useShallow((state) => [state.buildings]),
  )


  return (
    <div>
      {buildings.map((building) => <Building key={building.key} building={building} />)}
    </div>
  )
}