import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"

export function Resources(): React.ReactElement {
  const [tick, wheat] = useResourcesStore(
    useShallow((state) => [state.tick, state.wheat]),
  )


  return (
    <ul>
      <li>tick: {tick}</li>
      <li>wheat: {wheat}</li>
    </ul>
  )
}