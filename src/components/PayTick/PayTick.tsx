import React from "react"
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { ITechTree } from "../../interfaces/ITechTree";


export function PayTick(): React.ReactElement {

  const [tick, activeTechKey, getDeveloping, payTech] = useBoundStore(
    useShallow((state) => [state.tick, state.activeTechKey, state.getTechs, state.payTech])
  );

  const [lockTick, setLockTick] = React.useState(tick);

  const treeKeys = Object.keys(getDeveloping()) as (keyof ITechTree)[];

  React.useEffect(() => {
    function payActiveTech() {
      treeKeys.forEach((treeKey) => {
        getDeveloping()[treeKey].forEach((tech) => {
          if(tech.key === activeTechKey) {
            console.log("paying tech", tech.displayName)
            payTech(treeKey, tech.key, 1)
          }
        })
      })
    }

    if (lockTick < tick) {
      setLockTick(tick);
      if(activeTechKey) {
        payActiveTech();
      }
    }
  }, [activeTechKey, getDeveloping, lockTick, payTech, tick, treeKeys]) 


  return (
    <div>
      <h2>PayTick</h2>
    </div>
  )
}