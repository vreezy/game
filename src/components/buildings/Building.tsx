import { BuildingType, IBuilding } from "../../interfaces/IBuilding"
import { Forest } from "./Forest";
import { Nothing } from "./Nothing";
import { WheatField } from "./WheatField";

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
      type: "wheatField",
      element: <WheatField {...props}/>
    },
    {
      type: "forest",
      element: <Forest {...props} />
    },
    {
      type: "quarry",
      element: <Nothing {...props} />
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