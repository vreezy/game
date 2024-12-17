import React from "react";
import { useResourcesStore } from "../../stores/resourcesStore";
import { useBuildingStore } from "../../stores/buildingsStore";
import { useDemographyStore } from "../../stores/demographyStore";
import { useEngineStore } from "../../stores/engineStore";

export function Options(): React.ReactElement {
  const resetResources = useResourcesStore((state) => state.reset);
  const resetBuildings = useBuildingStore((state) => state.reset);
  const resetDemography = useDemographyStore((state) => state.reset);
  const resetEngine = useEngineStore((state) => state.reset);

  function _handleReset(): void {
    resetResources();
    resetBuildings();
    resetDemography();
    resetEngine();
  }

  return (
    <ul>
      <li>
        <button onClick={() => _handleReset()}>reset</button>
      </li>
    </ul>
  );
}
