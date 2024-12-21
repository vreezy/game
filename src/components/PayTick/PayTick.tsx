import React from "react"
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { ITechTree } from "../../interfaces/ITechTree";


export function PayTick(): React.ReactElement {

  const [tick, lastPayTechTick, activeTechKey, getTechTree, payTech, getMaxResources] = useBoundStore(
    useShallow((state) => [state.tick, state.lastPayTechTick, state.activeTechKey, state.getTechTree, state.payTech, state.getMaxResources])
  );

  const tree = getTechTree();
  const treeKeys = Object.keys(tree) as (keyof ITechTree)[];
  const techPayAmount = getMaxResources().science;

  React.useEffect(() => {
    function payActiveTech() {
      treeKeys.forEach((treeKey) => {
        tree[treeKey].forEach((tech) => {
          if(tech.key === activeTechKey) {
            payTech(treeKey, tech.key, techPayAmount, tick)
          }
        })
      })
    }

    
    
    if(activeTechKey && lastPayTechTick < tick) {
      payActiveTech();
    }
    
  }, [activeTechKey, lastPayTechTick, payTech, techPayAmount, tick, tree, treeKeys]) 


  return (
    <></>
  )
}