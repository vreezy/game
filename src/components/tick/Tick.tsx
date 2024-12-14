import React from "react"
import { useResourcesStore } from "../../stores/resourcesStore"

export function Tick(props: Readonly<React.PropsWithChildren>): React.ReactElement {
  const increaseTick = useResourcesStore((state) => state.increaseTick)

  React.useEffect(() => {
    const intervalID = setInterval(() =>  {
      increaseTick(1)
  }, 1000);

    return () => clearInterval(intervalID);
  }, [increaseTick])

  return (
    <>
      {props.children}
    </>
  )
}