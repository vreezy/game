import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { getNodeKey } from "../../utils/getNodeKey";
import { INode } from "../../interfaces/INode";
import { sortByCreatedTick } from "../../utils/sortByCreatedTick";

export function FightTick(): React.ReactElement {
  const [tick, getUnits, getNodes, getBuildings, updateUnit, removeUnit] =
    useBoundStore(
      useShallow((state) => [
        state.tick,
        state.getUnits,
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
    function fight() {
      // getUnits().forEach((unit) => {
      getBuildings().forEach((building) => {
        const buildingNode = getNodes().find(
          (n) => getNodeKey(n) === building.nodeKey && building?.weapons
        );
        if (buildingNode && building.weapons) {
          getUnits()
            .sort(sortByCreatedTick)
            .slice(0, building.weapons.targets)
            .forEach((unit) => {
              const unitNode = getNodes().find(
                (n) => getNodeKey(n) === unit.nodeKey
              );

              if (
                unitNode &&
                inside_circle(
                  buildingNode,
                  unitNode,
                  (building.weapons?.range ?? 2) / 2
                )
              ) {
                console.log("Unit in range", unit.key);
                const newLive = unit.health - (building.weapons?.damage ?? 1);
                if (newLive > 0) {
                  updateUnit({
                    ...unit,
                    health: newLive,
                  });
                } else {
                  removeUnit(unit.key);
                }
              }
            });
        }
      });
    }

    fight();
  }, [getUnits, getNodes, getBuildings, updateUnit, removeUnit, tick]);

  return <></>;
}
