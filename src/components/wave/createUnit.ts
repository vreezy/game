import { IUnit, IUnitType } from "../../interfaces/IUnit";
import { UNIT_ENTRY } from "../const/graph";
import { UNITS } from "../const/units";

export function createUnit(type: IUnitType, tick: number): IUnit {

  const unit = UNITS.find((unit) => unit.type === type);
  
  if(unit) {
    return {
      ...unit,
      createdTick: tick,
      nodeKey: UNIT_ENTRY,
      key: crypto.randomUUID()
    };
  }

  return {
    ...UNITS[0],
    createdTick: tick,
    nodeKey: UNIT_ENTRY,
    key: crypto.randomUUID()
  };
  
}