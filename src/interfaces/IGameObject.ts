import { BuildingType } from "./IBuilding";
import { DefenseType } from "./IDefense";
import { IPosition } from "./IPosition";
import { IUnitType } from "./IUnit";

export interface IGameObject{
    displayName: string;
    key: string;
    nodeKey: string;
    position: IPosition;
    type: BuildingType | DefenseType | IUnitType;
    createdTick: number;
}