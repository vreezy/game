import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
export function UpdatePath(): React.ReactElement {

  const [buildings, updatePath] =
    useBoundStore(
      useShallow((state) => [
        state.buildings,
        state.updatePath
      ])
    );

  React.useEffect(() => {

    updatePath()
  }, [
    buildings, updatePath
  ]);

  return <></>;
}
