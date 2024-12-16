import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"

export function Resources(): React.ReactElement {
  const [tick, resources] = useResourcesStore(
    useShallow((state) => [state.tick, state.resources]),
  )


  return (
    <ul>
      <li>tick: {tick}</li>
      <li>wheat: {resources().wheat}</li>
      <li>wood: {resources().wood}</li>
      <li>stone: {resources().stone}</li>
      <li>faith: {resources().faith}</li>
      <li>trust: {resources().trust}</li>
      <li>happiness: {resources().happiness}</li>
      <li>gold: {resources().gold}</li>
      <li>population: {resources().population}</li>
    </ul>
  )
}