import { Box } from "@mui/material";
import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Layer } from "./Layer";
import { getNodeKey } from "../../utils/getNodeKey";
import { Building } from "../buildings/Building";

// InteractionLayer
// Dev Layer
// Animation Layer
// Building Layer
// Map/Background Layer

export function Graph(): React.ReactElement {
  const [nodes, setSelectedNodeKey, buildings] = useBoundStore(useShallow((state) => [state.nodes, state.setSelectedNodeKey, state.buildings]));

  const gridItem = {
    // margin: "8px",
    border: "1px solid red",
  };

  return (
    <Box sx={{position: "relative", width: "100%", height: "100%"}}>
      {/* Interaction */}
      <Layer zIndex={"100"}>
        {nodes.map((node) => {
          return <Box key={getNodeKey(node)} sx={gridItem} ><button onClick={() => setSelectedNodeKey(getNodeKey(node))} style={{width: "100%", height:"100%", opacity: "0"}}></button></Box>;
        })}
      </Layer>

      {/* Buildings */}
      <Layer zIndex={"90"}>
        {nodes.map((node) => {
          const building = buildings.find((b) => b.nodeKey === getNodeKey(node));
          if(building) {
            return <Box key={getNodeKey(node)}><Building building={building} /></Box>;
          }
          return <Box key={getNodeKey(node)}></Box>;
          // {buildings.map((building) => <Box key={building.key} sx={gridItem}><Building key={building.key} building={building} /></Box>)}
        })
        
        }
      </Layer>


      <Layer zIndex={"100"}>
        {nodes.map((node) => {
          return <Box key={getNodeKey(node)} sx={gridItem} ><button onClick={() => setSelectedNodeKey(getNodeKey(node))} style={{width: "100%", height:"100%", opacity: "0.2"}}>{getNodeKey(node)}</button></Box>;
        })}
      </Layer>

    </Box>
  );
}
