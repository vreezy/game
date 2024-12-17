import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import { useBuildingStore } from "../../stores/buildingsStore"
import { useDemographyStore } from "../../stores/demographyStore"

export function Resources(): React.ReactElement {

  const [demographies] = useDemographyStore(
    useShallow((state) => [state.demographies]),
  )

  const [resources] = useResourcesStore(
    useShallow((state) => [state.resources]),
  )

  const [buildings] = useBuildingStore(
    useShallow((state) => [state.buildings]),
  )

  const maxPopulation = buildings.map(b => b.maxPopulation).reduce((total, val) => total + val, 0)

  return (
    <ul>
      <li>tick: {demographies().tick}</li>
      <li>age: {demographies().age}</li>
      <li>wheat: {resources().wheat}</li>
      <li>wood: {resources().wood}</li>
      <li>stone: {resources().stone}</li>
      <li>faith: {resources().faith}</li>
      <li>trust: {resources().trust}</li>
      <li>happiness: {resources().happiness}</li>
      <li>gold: {resources().gold}</li>
      <li>population: {resources().population}/{maxPopulation}</li>
    </ul>
  )
}