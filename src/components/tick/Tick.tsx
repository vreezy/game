import React from "react"
import { useEngineStore } from "../../stores/engineStore";
import { useShallow } from "zustand/shallow";

export function Tick(props: Readonly<React.PropsWithChildren>): React.ReactElement {

  const [increaseTick, speed] = useEngineStore(
    useShallow((state) => [state.increaseTick, state.speed])
  );


  function getMilliseconds(speed: number): number {
    if (speed <= 1) {
      return 1000;
    }

    if (speed === 2) {
      return 350;
    }

    return 10;
  }
  const milliseconds = getMilliseconds(speed);

  React.useEffect(() => {
    const intervalID = setInterval(() =>  {
      increaseTick()
    }, milliseconds);

    return () => clearInterval(intervalID);
  }, [increaseTick, milliseconds])

  return (
    <>
      {props.children}
    </>
  )
}