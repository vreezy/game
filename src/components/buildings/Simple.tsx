import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { BuildingProps } from "./Building";
import { modulo } from "../../utils/modulo";
import { hasEnoughResources } from "../../utils/hasEnoughResources";

export function Simple(props: Readonly<BuildingProps>): React.ReactElement {

  const [tick, resources, increaseResources, decreaseResources, setBuilding] =
    useBoundStore(
      useShallow((state) => [
        state.tick,
        state.resources,
        state.increaseResources,
        state.decreaseResources,
        state.setBuilding
      ])
    );

  const [lockTick, setLockTick] = React.useState(tick);

  React.useEffect(() => {
    function lease() {
      if (tick > props.building.createdTick && props.building?.lease && modulo(tick, props.building.lease.moduloTick) === 0) {
        if (hasEnoughResources(resources(), props.building.lease.resources)) {
          decreaseResources(props.building.lease.resources);
        }
        else {
          // TODO: decrees happiness?
        }
      }
    }

    function income() {
      if (tick > props.building.createdTick && props.building?.income && modulo(tick, props.building.income.moduloTick) === 0) {
        increaseResources(props.building.income.resources);
      }
    }

    if (lockTick < tick) {
      setLockTick(tick);
      if(props.building?.lease) {
        lease();
      }
      if(props.building?.income) {
        income();
      }
      
    }
  }, [
    props,
    lockTick,
    tick,
    resources,
    increaseResources,
    decreaseResources,
  ]);

  function _handleSell() {
    setBuilding(props.building.key, "nothing", tick);
  }

  return (
    <div style={{border: "1px solid blue"}}>
      {props.building.displayName} <br />
      created: {props.building.createdTick}<br/>
      income: {props.building?.income ? JSON.stringify(props.building.income) : 0} <br />
      lease: {props.building?.lease ? JSON.stringify(props.building.lease) : 0} <br />
      <br />
      <button onClick={() => _handleSell()}>Sell {props.building.displayName}</button>
    </div>
  );
}
