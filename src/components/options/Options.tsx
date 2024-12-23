import React from "react";

import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";

export function Options(): React.ReactElement {
  const [resetResourcesStore, resetBuildingStore, resetDemographyStore, resetEngineStore, resetTechStore, resetMapStore, resetSharedStore, resetUnitStore] = useBoundStore(
    useShallow((state) => [state.resetResourcesStore, state.resetBuildingStore, state.resetDemographyStore, state.resetEngineStore, state.resetTechStore, state.resetMapStore, state.resetSharedStore, state.resetUnitStore])
  );

  const [toggleTechTree] = useBoundStore(
    useShallow((state) => [state.toggleTechTree,])
  );
  

  function _handleReset(): void {
    resetResourcesStore();
    resetBuildingStore();
    resetDemographyStore();
    resetEngineStore();
    resetTechStore();
    resetMapStore();
    resetUnitStore();
    resetSharedStore();
  }

  return (
    <ul>
      <li>
        <button onClick={() => toggleTechTree()}>toggle tech tree</button>
        <button onClick={() => _handleReset()}>reset</button>
      </li>
    </ul>
  );
}
