interface IBuilding {
  key: string;
  type: string;
}

export function Buildings(): React.ReactElement {
  const buildings: IBuilding[] = [
    {
      key: "sss",
      type: "xxxx"
    },
  ]

  return (
    <div>
      {buildings.map(building => {
        <div>
          {building.key}
        </div>
        
      })}
    </div>
  )
}