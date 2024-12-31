import { UNIT_ENTRY_POSITION } from "../components/const/graph";
import { UNITS } from "../components/const/units";
import { IPosition } from "../interfaces/IPosition";
import { IUnit, IUnitType } from "../interfaces/IUnit";

export function createUnit(type: IUnitType, path: IPosition[], tick: number): IUnit {

  const unit = UNITS.find((unit) => unit.type === type);
  
  if(unit) {
    return {
      ...unit,
      createdTick: tick,
      modifiedTick: tick,
      position: [...UNIT_ENTRY_POSITION],
      path,
      key: crypto.randomUUID()
    };
  }
  
  throw new Error(`Unit of type ${type} not found`);;  
}