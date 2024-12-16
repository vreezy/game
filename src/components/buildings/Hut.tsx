import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import React from "react"
import { BuildingProps } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"
import { modulo } from "../../utils/modulo"




export function Hut(props: Readonly<BuildingProps>): React.ReactElement {
  const [tick, wheat, decreaseWheat, increasePopulation, decreasePopulation] = useResourcesStore(
    useShallow((state) => [state.tick, state.wheat, state.decreaseWheat, state.increasePopulation, state.decreasePopulation]),
  )

  const [setBuilding] = useBuildingStore(
    useShallow((state) => [state.setBuilding]),
  )


  const [population, setPopulation] = React.useState(0)

  const [lockTick, setLockTick] = React.useState(-1)

  React.useEffect(() => {
    function once() {
      if(tick > props.building.createdTick && modulo(tick, 10) === 0) {
        if(wheat > 0 ) {
          // cost 1 wheat every 10 ticks
          decreaseWheat(1);

          setPopulation((prev) => prev < 1 ? prev + 1 : prev)
          if(population < 5) {
            console.log("Increase Pop")
            increasePopulation(1)
          }
        }

        if(wheat < 1 ) {
          setPopulation((prev) => prev < 1 ? prev + 1 : prev)
          if(population > 0) {
            console.log("decrease Pop")
            decreasePopulation(1)
          }
        }

        

      }
    }

    if(lockTick < tick) {
      setLockTick(tick)
      once()
    }
  }, [population, lockTick, tick, props.building.createdTick, wheat, decreaseWheat, increasePopulation, decreasePopulation])

  function _handleSell() {
    decreasePopulation(population)
    setBuilding(props.building.key, "nothing", tick)
  }

  return (
    <div>
      Hut <br/>
      created: {props.building.createdTick}<br/>
      population: {population} <br/>
 
      <button onClick={() => _handleSell()}>Sell</button>
      

    </div>
  )
}