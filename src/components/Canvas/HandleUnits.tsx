import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";

import { getNodeKey } from "../../utils/getNodeKey";
import { Unit } from "./Unit";
import { useFrame } from "@react-three/fiber";



export default function HandleUnits() {
  const [units, updateUnit, removeUnit, path, tick, nodes] = useBoundStore(
    useShallow((state) => [state.units, state.updateUnit, state.removeUnit, state.path, state.tick, state.nodes])
  );

  const handleUnitUpdate = React.useCallback(
    (unit: IUnit, delta: number) => {
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

      const node = nodes.find(
        (node) => getNodeKey(node) === unit.nodeKey
      );

      if(node) {
        const speed = unit.speed * delta * 100;
        const nextX = node[0] + Math.cos(nodes[nextNodeIndex][0]) * speed;
        const nextZ = node[2] + Math.sin(nodes[nextNodeIndex][1]) * speed;
        
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
      }


    }, [updateUnit, removeUnit, path]);

  useFrame((_state, delta) => {


    units.forEach((unit) => {
 

      handleUnitUpdate(unit, delta);

  })
});

  return units.map((unit) => {
    const node = nodes.find(
      (node) => getNodeKey(node) === unit.nodeKey
    );
    if (node) {
      return <Unit key={unit.key} node={node} unit={unit}/>;
    }
    return null;
  });
}
