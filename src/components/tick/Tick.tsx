import React from "react"
import { useDemographyStore } from "../../stores/demographyStore";


export function Tick(props: Readonly<React.PropsWithChildren>): React.ReactElement {
  const increaseTick = useDemographyStore((state) => state.increaseTick)

  React.useEffect(() => {
    const intervalID = setInterval(() =>  {
      increaseTick()
  }, 1000);

    return () => clearInterval(intervalID);
  }, [increaseTick])

  return (
    <>
      {props.children}
    </>
  )
}