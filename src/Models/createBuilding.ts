import { BUILDINGS } from "../components/const/buildings";
import { BuildingType, IBuilding } from "../interfaces/IBuilding";
import { IPosition } from "../interfaces/IPosition";


export function createBuilding(type: BuildingType, position: IPosition, tick: number): IBuilding {

  const building = BUILDINGS.find((building) => building.type === type);
  
  if(building) {
    return {
      ...building,
      createdTick: tick,
      nodeKey: "REMOVE_THIS",
      position,
      key: crypto.randomUUID()
    };
  }
  
  throw new Error(`Building of type ${type} not found`);;  
}