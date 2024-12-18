import { useShallow } from "zustand/shallow"

import { useBoundStore } from "../../stores/boundStore"

export function Resources(): React.ReactElement {

  const [tick, demographies, resources, getMaxResources] = useBoundStore(
    useShallow((state) => [state.tick, state.demographies, state.resources, state.getMaxResources]),
  )

  

  return (
    <ul>
      <li>tick: {tick}</li>
      <li>age: {demographies().age}</li>
      <li>wheat: {resources().wheat}/ {getMaxResources().wheat ?? 0}</li>
      <li>wood: {resources().wood} / {getMaxResources().wood ?? 0}</li>
      <li>stone: {resources().stone} / {getMaxResources().stone ?? 0}</li>
      <li>faith: {resources().faith} / {getMaxResources().faith ?? 0}</li>
      <li>trust: {resources().trust} / {getMaxResources().trust ?? 0}</li>
      <li>happiness: {resources().happiness} / {getMaxResources().happiness ?? 0}</li>
      <li>gold: {resources().gold} / {getMaxResources().gold ?? 0}</li>
      <li>population: {resources().population}/{getMaxResources().population}</li>
    </ul>
  )
}