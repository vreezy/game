import { useShallow } from "zustand/shallow"
import { useResourcesStore } from "../../stores/resourcesStore"
import { IResources } from "../../interfaces/IResources"
import { hasEnoughResources } from "../../utils/hasEnoughResources"

interface AgeCost {
  age: number,
  cost: Partial<IResources>
}

const ageCost: AgeCost[] = [
  {
    age: 1,
    cost: {
      wheat: 20,
      wood: 20
    }
  },
  {
    age: 2,
    cost: {
      faith: 20,
      trust: 20,
      gold: 10
    }
  }
]

export function Age(): React.ReactElement {
  const [age, increaseAge, decreaseResources, wheat, wood, stone, faith, trust, happiness, gold] = useResourcesStore(
    useShallow((state) => [state.age, state.increaseAge, state.decreaseResources, state.wheat, state.wood, state.stone, state.faith, state.trust, state.happiness, state.gold]),
  )
  
  const nextAge = ageCost.find(ac => ac.age === age + 1)

  const resources: IResources = {
    wheat,
    wood,
    stone,
    faith,
    trust,
    happiness,
    gold
  }

  function isDisabled(): boolean {
    if(nextAge) {
      return hasEnoughResources(resources, nextAge.cost)     
    }

    return true
  }

  function _handleNextAge() {
    if(nextAge && !isDisabled()) {
      decreaseResources(nextAge.cost)
      increaseAge()
    }    
  }

  return (
    <div>
      <button disabled={isDisabled()} onClick={() => _handleNextAge()}>AGE: {age} cost: {nextAge && JSON.stringify(nextAge.cost)}</button>
    </div>
  )
}