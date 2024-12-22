import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";


import { Box, Modal } from "@mui/material";
import { BUILDINGS } from "../const/buildings";
import { BuildingType } from "../../interfaces/IBuilding";
import { hasEnoughResources } from "../../utils/hasEnoughResources";

export function BuildMenu() {

  const [tick, age, selectedNodeKey, setSelectedNodeKey, isBuildingAvailable, getResources, setBuilding, decreaseResources] = useBoundStore(
    useShallow((state) => [state.tick, state.age, state.selectedNodeKey, state.setSelectedNodeKey, state.isBuildingAvailable, state.getResources, state.setBuilding, state.decreaseResources])
  );  

    function _handleBuilding(type: BuildingType): void {
      const cost =  BUILDINGS.find(b => b.type === type)?.cost
      if(cost && selectedNodeKey && hasEnoughResources(getResources(), cost) ) {
        setBuilding(selectedNodeKey, type, tick)
        decreaseResources(cost)
        setSelectedNodeKey(null)
      }
    }
  
    function _isDisabled(type: BuildingType): boolean {
      const cost = BUILDINGS.find(b => b.type === type)?.cost
      if(cost) {
        return !hasEnoughResources(getResources(), cost)  
      }
      return false
    }

    
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80vw",
    height: "80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: "scroll",
    boxShadow: 24,
    p: 4,
    
  };

  return (
    <Modal
      open={selectedNodeKey !== null}
      onClose={() => setSelectedNodeKey(null)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={style}>

    <h2>Bau Menu - {selectedNodeKey}</h2>


      <ul>
        {BUILDINGS
          .filter(b => b.age <= age)
          .filter(b => b.type !== "nothing")
          .filter(b => isBuildingAvailable(b.type))
          .map(b => {
          return (
            <li key={b.type}><button disabled={_isDisabled(b.type)} onClick={() => _handleBuilding(b.type)}>{b.displayName} cost:{JSON.stringify(b.cost)}</button></li>      
          )
        })}
      </ul>


    </Box>
  </Modal>

  )
}