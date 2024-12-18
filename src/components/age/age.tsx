import { useShallow } from "zustand/shallow"

import { IResources } from "../../interfaces/IResources"
import { hasEnoughResources } from "../../utils/hasEnoughResources"
import { useBoundStore } from "../../stores/boundStore"

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
  const [age, increaseDemographies, decreaseResources, resources] = useBoundStore(
    useShallow((state) => [state.age, state.increaseDemographies, state.decreaseResources, state.resources]),
  )

  const nextAge = ageCost.find(ac => ac.age === age + 1)

  function isDisabled(): boolean {
    if(nextAge) {
      return !hasEnoughResources(resources(), nextAge.cost)     
    }

    console.log("no next age")

    return true
  }

  function _handleNextAge() {
    if(nextAge && !isDisabled()) {
      decreaseResources(nextAge.cost)
      increaseDemographies({age: 1})
    }    
  }

  return (
    <div>
      <button disabled={isDisabled()} onClick={() => _handleNextAge()}>AGE: {age} cost: {nextAge && JSON.stringify(nextAge.cost)}</button>
    </div>
  )
}