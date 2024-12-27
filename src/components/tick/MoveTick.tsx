import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
export function MoveTick(): React.ReactElement {
  const [tick, path, getUnits, updateUnit, removeUnit] =
    useBoundStore(
      useShallow((state) => [
        state.tick,
        state.path,
        state.getUnits,
        state.updateUnit,
        state.removeUnit

      ])
    );

  React.useEffect(() => {
    console.log("MoveTick", tick, getUnits().length);
    getUnits().slice(0,1).forEach((unit) => {

      console.log("unit", unit);
      let currentNodeIndex = path.findIndex((nodeKey) => nodeKey === unit.nodeKey);
      console.log("currentNodeIndex", currentNodeIndex);
      if(currentNodeIndex < 0) {
        // find next neighbor node
        currentNodeIndex = unit.lastPathIndex;
      }      
  
      console.log("currentNodeIndex u", currentNodeIndex);

      const nextNodeIndex = currentNodeIndex + 1;
      
      const nextMoveTick = unit.modifiedTick + unit.speed;

      console.log("currentNodeIndex x", currentNodeIndex);
      console.log("nextMoveTick x", nextMoveTick);
      
      if(nextMoveTick <= tick) {
        if(nextNodeIndex >= path.length) {
          // remove the unit dies
          removeUnit(unit.key);
        } else {
          // move
          updateUnit({
            ...unit,
            nodeKey: path[nextNodeIndex],
            modifiedTick: tick,
            lastPathIndex: currentNodeIndex
          })          
        }  
      }

    });
  }, [tick, path, getUnits, removeUnit, updateUnit]);

  return <></>;
}
