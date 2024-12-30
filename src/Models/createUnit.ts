import { UNIT_ENTRY, UNIT_ENTRY_POSITION } from "../components/const/graph";
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
      position: [...UNIT_ENTRY_POSITION],
      key: crypto.randomUUID()
    };
  }
  
  throw new Error(`Unit of type ${type} not found`);;  
}