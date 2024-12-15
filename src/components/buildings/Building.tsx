import { BuildingType, IBuilding } from "../../interfaces/IBuilding"
import { Nothing } from "./Nothing";
import { WheatFarm } from "./WheatFarm";

export interface BuildingProps  {
  building: IBuilding;
}

interface BuildingMap {
  type: BuildingType;
  element: React.ReactElement
}



export function Building(props: Readonly<BuildingProps>): React.ReactElement {

  const buildingMaps: BuildingMap[] = [
    {
      type: "wheatFarm",
      element: <WheatFarm />
    },
    {
      type: "nothing",
      element: <Nothing {...props} />
    }
  ]
  
  return (
    <div>
      {buildingMaps.find((bm) => bm.type === props.building.type)?.element ?? <></>}
    </div>
  )
}