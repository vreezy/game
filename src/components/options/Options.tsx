import React from "react";
import { useResourcesStore } from "../../stores/resourcesStore";
import { useBuildingStore } from "../../stores/buildingsStore";
import { useDemographyStore } from "../../stores/demographyStore";

export function Options(): React.ReactElement {
  const resetResources = useResourcesStore((state) => state.reset);
  const resetBuildings = useBuildingStore((state) => state.reset);
  const resetDemography = useDemographyStore((state) => state.reset);

  function _handleReset(): void {
    resetResources();
    resetBuildings();
    resetDemography();
  }

  return (
    <ul>
      <li>
        <button onClick={() => _handleReset()}>reset</button>
      </li>
    </ul>
  );
}
