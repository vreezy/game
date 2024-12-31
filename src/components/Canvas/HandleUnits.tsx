import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";

// import { getNodeKey } from "../../utils/getNodeKey";

import { useFrame } from "@react-three/fiber";
import { IUnit } from "../../interfaces/IUnit";
// import { IPosition } from "../../interfaces/IPosition";
import { useInterval } from "react-use";
import { Tile } from "./Tile";
import { IPosition } from "../../interfaces/IPosition";

// function positionToNodeKey(position: IPosition) {
//   return `${position[0].toFixed(0)}${position[2].toFixed(0)}`;
// }

export default function HandleUnits() {
  const [units, updateUnit, getTick, spawnUnit, removeUnit, getPathPositions] =
    useBoundStore(
      useShallow((state) => [
        state.units,
        state.updateUnit,

        
        state.getTick,

        state.spawnUnit,
        state.removeUnit,

        state.getPathPositions

      ])
    );

  useInterval(() => {
    spawnUnit("worker", getPathPositions(), getTick());
  }, 10000);

  function positionEquals(
    position1: IPosition,
    position2: IPosition,
    tolerance: number = 0.1
  ) {
    return (
      Math.abs(position1[0] - position2[0]) < tolerance &&
      Math.abs(position1[2] - position2[2]) < tolerance
    );
  }

  function getAngle(from: IPosition, to: IPosition): number {
    const dx = to[0] - from[0];
    const dy = to[2] - from[2];
    return Math.atan2(dy, dx);
  }

  function handleUnitUpdate(unit: IUnit, delta: number) {
      if(Math.floor(unit.position[0]) > 30 || Math.floor(unit.position[2]) > 30 ) { 
        console.log("remove unit" , unit.key) 
        removeUnit(unit.key);
        return;
      }
      // const path = getPathPositions();
      // if(JSON.stringify(path) !== JSON.stringify(unit.path)) {
      //   return
      // }

      // let currentNodeIndex = path.findIndex(
      //   (nodeKey) => nodeKey === positionToNodeKey(unit.position)
      // );

      // if (currentNodeIndex < 0) {
      //   // find next neighbor node
      //   currentNodeIndex = unit.lastPathIndex;
      // }


      if(unit.pathIndex + 1 >= unit.path.length) {
        console.log("unit is at end of path");
        removeUnit(unit.key);
        return;
        
      }

      const arrived = positionEquals(unit.position, unit.path[unit.pathIndex + 1]);
      const nextPosition = unit.path[unit.pathIndex + 1]

      // if (node) {
        const speed = unit.speed * delta * 100;
        const angle = getAngle(unit.position, nextPosition)
        const nextX = unit.position[0] + Math.cos(angle) * speed;
        const nextZ = unit.position[2] + Math.sin(angle) * speed;
        // const nextState = positionEquals([nextX, nextZ], grid.end)

        // if (nextNodeIndex >= getPathPositions().length) {
          // remove the unit dies
          // removeUnit(unit.key);
        // } else {
          // move
          updateUnit({
            ...unit,
            position: [nextX, unit.position[1], nextZ],
            modifiedTick: getTick(),
            pathIndex: arrived ? unit.pathIndex + 1 : unit.pathIndex,
            // lastPathIndex: currentNodeIndex,
          });
        }
      // }


  useFrame((_state, delta) => {
    units.forEach((unit) => {
      handleUnitUpdate(unit, delta);
    });
  });

  return units.map((unit) => (
    <Tile
      key={unit.key}
      position={unit.position}
      boxArgs={[1.1, 1.1, 1]}
      mesh={{ color: "Magenta" }}
    />
  ));
}
