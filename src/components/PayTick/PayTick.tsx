import React from "react"
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { ITechTree } from "../../interfaces/ITechTree";


export function PayTick(): React.ReactElement {

  const [tick, lastPayTechTick, activeTechKey, getTechTree, payTech] = useBoundStore(
    useShallow((state) => [state.tick, state.lastPayTechTick, state.activeTechKey, state.getTechTree, state.payTech])
  );

  

  const tree = getTechTree();
  const treeKeys = Object.keys(tree) as (keyof ITechTree)[];

  React.useEffect(() => {
    function payActiveTech() {
      treeKeys.forEach((treeKey) => {
        tree[treeKey].forEach((tech) => {
          if(tech.key === activeTechKey) {
            payTech(treeKey, tech.key, 1, tick)
          }
        })
      })
    }

    
    
    if(activeTechKey && lastPayTechTick < tick) {
      payActiveTech();
    }
    
  }, [activeTechKey, lastPayTechTick, payTech, tick, tree, treeKeys]) 


  return (
    <></>
  )
}