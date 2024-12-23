import { Box } from "@mui/material";
import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Layer } from "./Layer";
import { getNodeKey } from "../../utils/getNodeKey";
import { Building } from "../buildings/Building";
import { UNIT_ENTRY, UNIT_EXIT } from "../const/graph";

// InteractionLayer
// Dev Layer
// Animation Layer
// Building Layer
// Map/Background Layer

export function Graph(): React.ReactElement {
  const [nodes, setSelectedNodeKey, buildings, getRoute] = useBoundStore(useShallow((state) => [state.nodes, state.setSelectedNodeKey, state.buildings, state.getRoute]));

  const gridItem = {
    // margin: "8px",
    border: "1px solid red",
  };


  const route = getRoute(UNIT_ENTRY, UNIT_EXIT);
  console.log("route", route);

  return (
    <Box sx={{position: "relative", width: "100%", height: "100%"}}>
      {/* Interaction */}
      <Layer zIndex={"1000"}>
        {nodes.map((node) => {
          return <Box key={getNodeKey(node)} sx={gridItem} ><button onClick={() => setSelectedNodeKey(getNodeKey(node))} style={{width: "100%", height:"100%", opacity: "0"}}></button></Box>;
        })}
      </Layer>

      {/* Buildings */}
      <Layer zIndex={"900"}>
        {nodes.map((node) => {
          const building = buildings.find((b) => b.nodeKey === getNodeKey(node));
          if(building) {
            return <Box key={getNodeKey(node)}><Building building={building} /></Box>;
          }
          return <Box key={getNodeKey(node)}></Box>;
        })
        
        }
      </Layer>

      <Layer zIndex={"800"}>
        {nodes.map((node) => {
          if (Array.isArray(route)) {
            const pathItem = route.find((str) => str === (getNodeKey(node)));
            if(pathItem) {
              return <Box key={getNodeKey(node)} sx={{backgroundColor: "green", opacity: "0.2"}} ></Box>;
            }
          }
 
          return <Box key={getNodeKey(node)}></Box>;
        })}
      </Layer>
      

      {/* Dev */}
      <Layer zIndex={"20"}>
        {nodes.map((node) => {
          return <Box key={getNodeKey(node)} sx={{opacity: "0.2"}} >{getNodeKey(node)}</Box>;
        })}
      </Layer>

    </Box>
  );
}
