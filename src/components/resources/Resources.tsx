import { useShallow } from "zustand/shallow"

import { useBoundStore } from "../../stores/boundStore"

export function Resources(): React.ReactElement {

  const [tick, demographies, resources, buildings] = useBoundStore(
    useShallow((state) => [state.tick, state.demographies, state.resources, state.buildings]),
  )

  const maxPopulation = buildings.map(b => b.maxPopulation).reduce((total, val) => total + val, 0)

  return (
    <ul>
      <li>tick: {tick}</li>
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