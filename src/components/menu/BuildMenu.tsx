import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";

import { Box, Modal } from "@mui/material";
import { BUILDINGS } from "../const/buildings";
import { BuildingType, IBuilding } from "../../interfaces/IBuilding";
import { hasEnoughResources } from "../../utils/hasEnoughResources";

export function BuildMenu() {
  const [
    tick,
    age,
    
    selectedPosition,
    buildings,
    
    setSelectedPosition,
    isBuildingAvailable,
    getResources,
    addBuilding,
    decreaseResources,
    removeBuilding,
  ] = useBoundStore(
    useShallow((state) => [
      state.tick,
      state.age,
      
      state.selectedPosition,
      state.buildings,
      
      state.setSelectedPosition,
      state.isBuildingAvailable,
      state.getResources,
      state.addBuilding,
      state.decreaseResources,
      state.removeBuilding,
    ])
  );

  function _handleBuilding(type: BuildingType): void {
    const cost = BUILDINGS.find((b) => b.type === type)?.cost;
    if (cost && selectedPosition && hasEnoughResources(getResources(), cost)) {
     
      addBuilding(selectedPosition, type, tick);
      decreaseResources(cost);
      setSelectedPosition(null);
    }
  }

  function _isDisabled(type: BuildingType): boolean {
    const cost = BUILDINGS.find((b) => b.type === type)?.cost;
    if (cost) {
      return !hasEnoughResources(getResources(), cost);
    }
    return false;
  }

  function _handleSell(building: IBuilding): void {
    removeBuilding(building.key);
    setSelectedPosition(null);
  }

  const building = buildings.find((b) => JSON.stringify(b.position) === JSON.stringify(selectedPosition));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    overflow: "scroll",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={selectedPosition !== null}
      onClose={() => setSelectedPosition(null)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Bau Menu - {JSON.stringify(selectedPosition)}</h2>

        {building && (
          <>
            <p>Building: {building.displayName}</p>
            {(building.type !== "cave" && building.type !== "spawn") && (
              <button onClick={() => _handleSell(building)}>
                Sell {building.displayName}
              </button>
            )}
          </>
        )}

        {!building && (
          <ul>
            {BUILDINGS.filter((b) => b.age <= age)
              .filter((b) => b.type !== "nothing")
              .filter((b) => isBuildingAvailable(b.type))
              .map((b) => {
                return (
                  <li key={b.type}>
                    <button
                      disabled={_isDisabled(b.type)}
                      onClick={() => _handleBuilding(b.type)}
                    >
                      {b.displayName} cost:{JSON.stringify(b.cost)}
                    </button>
                  </li>
                );
              })}
          </ul>
        )}
      </Box>
    </Modal>
  );
}
