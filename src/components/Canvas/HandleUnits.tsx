import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";

import { getNodeKey } from "../../utils/getNodeKey";
import { Unit } from "./Unit";
import { useFrame } from "@react-three/fiber";
import { IUnit } from "../../interfaces/IUnit";
import { IPosition } from "../../interfaces/IPosition";
import { useInterval } from "react-use";

function positionToNodeKey(position: IPosition) {
  return `${position[0].toFixed(0)}${position[2].toFixed(0)}`;
}

export default function HandleUnits() {
  const [units, updateUnit, removeUnit, path, getTick, nodes, spawnUnit] = useBoundStore(
    useShallow((state) => [
      state.units,
      state.updateUnit,
      state.removeUnit,
      state.path,
      state.getTick,
      state.nodes,
      state.spawnUnit
    ])
  );

  useInterval(() => {
    spawnUnit("worker", getTick());
  }, 10000);

  const handleUnitUpdate = React.useCallback(
    (unit: IUnit, delta: number) => {
      let currentNodeIndex = path.findIndex(
        (nodeKey) => nodeKey === positionToNodeKey(unit.position)
      );

      if (currentNodeIndex < 0) {
        // find next neighbor node
        currentNodeIndex = unit.lastPathIndex;
      }

      const nextNodeIndex = currentNodeIndex + 1;

      const node = nodes.find((node) => getNodeKey(node) === unit.nodeKey);

      if (node) {
        const speed = unit.speed * delta * 100;
        const nextX = node[0] + Math.cos(nodes[nextNodeIndex][0]) * speed;
        const nextZ = node[2] + Math.sin(nodes[nextNodeIndex][1]) * speed;

        if (nextNodeIndex >= path.length) {
          // remove the unit dies
          removeUnit(unit.key);
        } else {
          // move
          updateUnit({
            ...unit,
            position: [nextX, unit.position[1], nextZ],
            modifiedTick: getTick(),
            lastPathIndex: currentNodeIndex,
          });
        }
      }
    },
    [path, nodes, removeUnit, updateUnit, getTick]
  );

  useFrame((_state, delta) => {
    units.forEach((unit) => {
      handleUnitUpdate(unit, delta);
    });
  });

  return units.map((unit) => <Unit key={unit.key} unit={unit} />);
}
