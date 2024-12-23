import { BuildingType } from "./IBuilding";
import { DefenseType } from "./IDefense";
import { IUnitType } from "./IUnit";

export interface IGameObject{
    displayName: string;
    key: string;
    nodeKey: string;
    type: BuildingType | DefenseType | IUnitType;
    createdTick: number;
}