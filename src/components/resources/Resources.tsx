import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"

export function Resources(): React.ReactElement {
  const [tick, wheat, wood, stone, faith, trust, happiness, gold] = useResourcesStore(
    useShallow((state) => [state.tick, state.wheat, state.wood, state.stone, state.faith, state.trust, state.happiness, state.gold]),
  )


  return (
    <ul>
      <li>tick: {tick}</li>
      <li>wheat: {wheat}</li>
      <li>wood: {wood}</li>
      <li>stone: {stone}</li>
      <li>faith: {faith}</li>
      <li>trust: {trust}</li>
      <li>happiness: {happiness}</li>
      <li>gold: {gold}</li>
    </ul>
  )
}