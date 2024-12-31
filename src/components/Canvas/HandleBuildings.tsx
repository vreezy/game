import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Tile } from "./Tile";
import { IBuilding } from "../../interfaces/IBuilding";
import React from "react";
import { modulo } from "../../utils/modulo";
import { hasEnoughResources } from "../../utils/hasEnoughResources";

export default function HandleBuildings() {
  const [buildings, tick, getResources, increaseResources, decreaseResources] =
    useBoundStore(
      useShallow((state) => [
        state.buildings,
        state.tick,
        state.getResources,
        state.increaseResources,
        state.decreaseResources,
      ])
    );

  function getColor(building: IBuilding) {
    return building.type === "cave"
      ? "red"
      : building.type === "spawn"
      ? "green"
      : "blue";
  }

  const lease = React.useCallback(
    (building: IBuilding) => {
      if (
        tick > building.createdTick &&
        building?.lease &&
        modulo(tick, building.lease.moduloTick) === 0
      ) {
        if (hasEnoughResources(getResources(), building.lease.resources)) {
          decreaseResources(building.lease.resources);
        } else {
          // TODO: decrees happiness?
        }
      }
    },
    [decreaseResources, getResources, tick]
  );

  const income = React.useCallback(
    (building: IBuilding) => {
      if (
        tick > building.createdTick &&
        building?.income &&
        modulo(tick, building.income.moduloTick) === 0
      ) {
        increaseResources(building.income.resources);
      }
    },
    [increaseResources, tick]
  );

  React.useEffect(() => {
    buildings.forEach((building) => {
      if (building?.lease) {
        lease(building);
      }
      if (building?.income) {
        income(building);
      }
    });
  }, [
    buildings,
    tick,
    getResources,
    increaseResources,
    decreaseResources,
    lease,
    income,
  ]);

  const renderBuildings = React.useMemo(() => {
    console.log("render Buildings");
    return buildings.map((building) => (
      <Tile
        key={building.key}
        position={building.position}
        boxArgs={[0.9, 0.9, 1]}
        mesh={{ color: getColor(building) }}
      />
    ));
  }, [buildings]);

  return renderBuildings;
}
