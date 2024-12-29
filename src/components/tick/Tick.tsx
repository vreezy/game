import React from "react"
import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";
import { useInterval } from "react-use";
// import { useFrame } from "@react-three/fiber";

export function Tick(props: Readonly<React.PropsWithChildren>): React.ReactElement {

  const [increaseTick, speed] = useBoundStore(
    useShallow((state) => [state.increaseTick, state.speed])
  );

  function getMilliseconds(speed: number): number {
    if (speed === 2) {
      return 350;
    }

    if (speed === 3) {
      return 200;
    }

    return 1000;
  }
  
  const milliseconds = getMilliseconds(speed);

  useInterval(() => {
    if (speed > 0) {
      increaseTick()
    }
  }, milliseconds);

  return (
    <>
      {props.children}
    </>
  )
}