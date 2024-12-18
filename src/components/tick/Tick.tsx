import React from "react"
import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";

export function Tick(props: Readonly<React.PropsWithChildren>): React.ReactElement {

  const [increaseTick, speed] = useBoundStore(
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