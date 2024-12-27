import { UNIT_ENTRY } from "../components/const/graph";
import { UNITS } from "../components/const/units";
import { IUnit, IUnitType } from "../interfaces/IUnit";

export function createUnit(type: IUnitType, tick: number): IUnit {

  const unit = UNITS.find((unit) => unit.type === type);
  
  if(unit) {
    return {
      ...unit,
      createdTick: tick,
      modifiedTick: tick,
      nodeKey: UNIT_ENTRY,
      key: crypto.randomUUID()
    };
  }
  
  throw new Error("Unit not found");  
}