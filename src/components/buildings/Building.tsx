import { BuildingType, IBuilding } from "../../interfaces/IBuilding"

import { Simple } from "./Simple";
import { Cave } from "./Cave";
import { Spawn } from "./Spawn";
import { INode } from "../../interfaces/INode";


export interface BuildingProps  {
  building: IBuilding;
  node: INode;
}

interface BuildingMap {
  type: BuildingType;
  element: React.ReactElement
}



export function Building(props: Readonly<BuildingProps>): React.ReactElement {

  const buildingMaps: BuildingMap[] = [
    {
      type: "cave",
      element: <Cave />
    },
    {
      type: "spawn",
      element: <Spawn />
    },
    {
      type: "wheatField",
      element: <Simple {...props}/>
    },
    {
      type: "forest",
      element: <Simple {...props} />
    },
    {
      type: "quarry",
      element: <Simple {...props} />
    },
    {
      type: "hut",
      element: <Simple {...props} />
    },
    {
      type: "tower",
      element: <Simple {...props} />
    },
    {
      type: "nothing",
      element: <></>
    }
  ]
  
  return (
    <div>
      {buildingMaps.find((bm) => bm.type === props.building.type)?.element ?? <></>}
    </div>
  )
}