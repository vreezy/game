import React from "react";
import { ITileProps, Tile } from "./Tile";
import { useFrame } from "@react-three/fiber";
import { IBuilding } from "../../interfaces/IBuilding";
import { IUnit } from "../../interfaces/IUnit";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";

export interface ITowerProps extends ITileProps {
  building: IBuilding;
}

function isInRange(building: IBuilding, unit: IUnit): boolean {
  if (!building?.weapons?.range) {
    return false;
  }

  const dist = Math.hypot(
    building.position[0] - unit.position[0],
    building.position[2] - unit.position[2]
  );

  if (dist > building.weapons.range) {
    return true;
  }

  return false;
}

export function Tower(props: ITowerProps) {
  const [units, updateUnit, removeUnit] = useBoundStore(
    useShallow((state) => [state.units, state.updateUnit, state.removeUnit])
  );

  const [timer, setTimer] = React.useState(0);

  useFrame((_state, delta) => {
    if (!props.building.weapons) {
      return;
    }

    setTimer((prev) => prev + delta);

    const inRangeUnits = units.filter((unit) =>
      isInRange(props.building, unit)
    );

    if (
      timer > props.building.weapons.speed &&
      inRangeUnits &&
      inRangeUnits.length > 0
    ) {
      setTimer(0);

      inRangeUnits.forEach((unit) => {
        
        const newHealth = unit.health - (props.building.weapons?.damage ?? 0);
        console.log("hit", unit.key, newHealth);

        if(newHealth <= 0) {
          removeUnit(unit.key);
        }
        else{
          updateUnit({
            ...unit,
            health: newHealth,
          });
        }
        
      });
    }
  });
  return <Tile {...props} />;
}
