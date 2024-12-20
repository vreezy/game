import React from "react";

import { useBoundStore } from "../../stores/boundStore";

export function Options(): React.ReactElement {
  const resetResourcesStore = useBoundStore((state) => state.resetResourcesStore);
  const resetBuildingStore = useBoundStore((state) => state.resetBuildingStore);
  const resetDemographyStore = useBoundStore((state) => state.resetDemographyStore);
  const resetEngineStore = useBoundStore((state) => state.resetEngineStore);
  const resetDevelopingStore = useBoundStore((state) => state.resetTechStore);

  const resetSharedStore = useBoundStore((state) => state.resetSharedStore);

  

  function _handleReset(): void {
    resetResourcesStore();
    resetBuildingStore();
    resetDemographyStore();
    resetEngineStore();
    resetDevelopingStore();
    resetSharedStore();
  }

  return (
    <ul>
      <li>
        <button onClick={() => _handleReset()}>reset</button>
      </li>
    </ul>
  );
}
