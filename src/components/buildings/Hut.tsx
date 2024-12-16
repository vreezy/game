import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import React from "react"
import { BuildingProps } from "./Building"
import { useBuildingStore } from "../../stores/buildingsStore"




export function Hut(props: Readonly<BuildingProps>): React.ReactElement {
    const [tick, wheat, decreaseWheat, increaseHappiness, decreaseHappiness, increasePopulation] = useResourcesStore(
      useShallow((state) => [state.tick, state.wheat, state.decreaseWheat, state.increaseHappiness, state.decreaseHappiness, state.increasePopulation]),
    )

    const [setBuilding] = useBuildingStore(
      useShallow((state) => [state.setBuilding]),
    )

    const [happiness, setHappiness] = React.useState(0)

    React.useEffect(() => {
      if(tick > props.building.createdTick && tick % 10 === 0) {
        const enoughWheat = wheat - 3;
        const wheatCost = enoughWheat < 3 ? enoughWheat : 3
        console.log("wheatCost", wheatCost)
        decreaseWheat(wheatCost);
        increasePopulation(wheatCost)

        if(wheatCost === 3) {
          if(happiness < 3) {
            increaseHappiness(1)
            setHappiness((prev) => prev + 1)
          }          
        }
        else {
          if(happiness > 0) {
            setHappiness((prev) => prev - 1)
            decreaseHappiness(1)
          }
        }

      }
    }, [tick, props.building.createdTick, wheat, decreaseWheat, happiness, setHappiness, increaseHappiness, decreaseHappiness, increasePopulation])

  return (
    <div>
      Hut <br/>
      created: {props.building.createdTick}
      produces people every 10 ticks
      but cost wheat.
      happiness is increased if wheat is available.
      happiness is deceased if wheat is not available.
      <button onClick={() => setBuilding(props.building.key, "nothing", tick)}>Sell</button>
      

    </div>
  )
}