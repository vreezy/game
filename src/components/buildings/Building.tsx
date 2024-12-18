import { BuildingType, IBuilding } from "../../interfaces/IBuilding"

import { Simple } from "./Simple";
import { Nothing } from "./Nothing";
import { Cave } from "./Cave";


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
      type: "cave",
      element: <Cave />
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