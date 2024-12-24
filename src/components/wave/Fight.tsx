import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { getNodeKey } from "../../utils/getNodeKey";
import { INode } from "../../interfaces/INode";

export function Fight(): React.ReactElement {
  const [units, getNodes, getBuildings, updateUnit, removeUnit] = useBoundStore(
    useShallow((state) => [
      state.units,
      state.getNodes,
      state.getBuildings,
      state.updateUnit,
      state.removeUnit,
    ])
  );

  function inside_circle(node: INode, nodeToCheck: INode, radius: number) {
    const dx = node[1] - nodeToCheck[1],
      dy = node[0] - nodeToCheck[0];
    const distance_squared = dx * dx + dy * dy;
    return distance_squared <= radius * radius;
  }

  React.useEffect(() => {
    units.forEach((unit) => {
      const unitNode = getNodes().find((n) => getNodeKey(n) === unit.nodeKey);
      if (unitNode) {
        getBuildings().forEach((building) => {
          const buildingNode = getNodes().find(
            (n) => getNodeKey(n) === building.nodeKey
          );
          if (
            buildingNode &&
            inside_circle(buildingNode, unitNode, building.weapons?.range ?? 1)
          ) {
            console.log("Unit in range", unit.key);
            const newLive = unit.live - (building.weapons?.damage ?? 1);
            if (newLive > 0) {
              updateUnit({
                ...unit,
                live: newLive,
              });
            } else {
              removeUnit(unit.key);
            }
          }
        });
      }
    });
  }, [units, getNodes, getBuildings, updateUnit, removeUnit]);

  return <></>;
}
