import { Box } from "@mui/material";
import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Layer } from "./Layer";
import { getNodeKey } from "../../utils/getNodeKey";

// InteractionLayer
// Dev Layer
// Animation Layer
// Building Layer
// Map/Background Layer

export function Graph(): React.ReactElement {
  const [nodes] = useBoundStore(useShallow((state) => [state.nodes]));

  const gridItem = {
    // margin: "8px",
    border: "1px solid red",
  };

  return (
    <>
      {/* DEV */}
      <Layer>
        {nodes.map((node) => {
          return <Box sx={gridItem}>{getNodeKey(node)}</Box>;
        })}
      </Layer>


    </>
  );
}
