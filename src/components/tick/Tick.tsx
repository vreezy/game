import React from "react"
import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";

export function Tick(props: Readonly<React.PropsWithChildren>): React.ReactElement {

  const [increaseTick, speed] = useBoundStore(
    useShallow((state) => [state.increaseTick, state.speed])
  );


  function getMilliseconds(speed: number): number {
    if (speed === 2) {
      return 350;
    }

    if (speed === 3) {
      return 10;
    }

    return 1000;
  }
  
  const milliseconds = getMilliseconds(speed);

  React.useEffect(() => {
    if (speed === 0) {
      return;
    }

    const intervalID = setInterval(() =>  {
      increaseTick()
    }, milliseconds);

    return () => clearInterval(intervalID);
  }, [increaseTick, milliseconds, speed])

  return (
    <>
      {props.children}
    </>
  )
}