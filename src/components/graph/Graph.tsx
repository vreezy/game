import React from "react";
import { Box } from "@mui/material";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Layer } from "./Layer";
import { getNodeKey } from "../../utils/getNodeKey";
import { Building } from "../buildings/Building";
import { UNIT_ENTRY, UNIT_EXIT } from "../const/graph";
import { INode } from "../../interfaces/INode";
import { Unit } from "./Unit";

// InteractionLayer
// Dev Layer
// Route Layer
// Animation Layer
// Units Layer
// Building Layer
// Map/Background Layer

export function Graph(): React.ReactElement {
  const [nodes, setSelectedNodeKey, buildings, path, isBlockingRoute, units] = useBoundStore(
    useShallow((state) => [
      state.nodes,
      state.setSelectedNodeKey,
      state.buildings,
      state.path,
      state.isBlockingRoute,
      state.units
    ])
  );

  function _handleOpenBuildMenu(node: INode): void {
    // if(!isBlockingRoute(UNIT_ENTRY, UNIT_EXIT, node)) {
      setSelectedNodeKey(getNodeKey(node))
    // }
    
  }

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Interaction */}
      <Layer zIndex={"1000"}>
        {nodes.map((node) => {
          return (
            <Box key={getNodeKey(node)} sx={{ border: `1px solid ${isBlockingRoute(UNIT_ENTRY, UNIT_EXIT, node) ? "red" : "green"}` }}>
              <button
                disabled={isBlockingRoute(UNIT_ENTRY, UNIT_EXIT, node)}
                onClick={() => _handleOpenBuildMenu(node)}
                style={{ width: "100%", height: "100%", opacity: "0" }}
              ></button>
            </Box>
          );
        })}
      </Layer>

      {/* Units */}
      <Layer zIndex={"900"}>
        {...nodes.map((node) => {
          const filteredUnits = units.filter(unit => unit.nodeKey === getNodeKey(node)).map(unit => {
            return <Unit key={unit.key} unit={unit} path={path as string[]} />;
          })
          if(filteredUnits.length > 0) {
            return filteredUnits;
          }

          return <Box key={getNodeKey(node)}></Box>;
          
        })}
      </Layer>

      {/* Buildings */}
      <Layer zIndex={"800"}>
        {nodes.map((node) => {
          const building = buildings.find(
            (b) => b.nodeKey === getNodeKey(node)
          );
          if (building) {
            return (
              <Box key={getNodeKey(node)}>
                <Building building={building} node={node}/>
              </Box>
            );
          }
          return <Box key={getNodeKey(node)}></Box>;
        })}
      </Layer>

      {/* Route */}
      <Layer zIndex={"800"}>
        {nodes.map((node) => {
          if (Array.isArray(path)) {
            const pathItem = path.find((str) => str === getNodeKey(node));
            if (pathItem) {
              return (
                <Box
                  key={getNodeKey(node)}
                  sx={{ backgroundColor: "green", opacity: "0.2" }}
                ></Box>
              );
            }
          }

          return <Box key={getNodeKey(node)}></Box>;
        })}
      </Layer>

      {/* Dev show nodeKey*/}
      <Layer zIndex={"20"}>
        {nodes.map((node) => {
          return (
            <Box key={getNodeKey(node)} sx={{ opacity: "0.2" }}>
              {getNodeKey(node)}
            </Box>
          );
        })}
      </Layer>
    </Box>
  );
}
