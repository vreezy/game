import { Box } from "@mui/material";
import { IUnit } from "../../interfaces/IUnit";

import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import React from "react";


interface IUnitProps {
  unit: IUnit;
  path: string[] 
}

export function Unit(props: IUnitProps): React.ReactElement {
  const [tick, updateUnit, removeUnit] = useBoundStore(useShallow((state) => [state.tick, state.updateUnit, state.removeUnit]));


  

  React.useEffect(() => {
    let currentNodeIndex = props.path.findIndex((nodeKey) => nodeKey === props.unit.nodeKey);

    // the path has changed
    if(currentNodeIndex < 0) {
      // find next neighbor node
      currentNodeIndex = props.unit.lastPathIndex;
    }
    

    const nextNodeIndex = currentNodeIndex + 1;
    
    const nextMoveTick = props.unit.createdTick + props.unit.speed;

    console.log("Unit", props.unit.key, "currentNodeIndex", currentNodeIndex, "nextNodeIndex", nextNodeIndex, "nextMoveTick", nextMoveTick, "tick", tick);
    
    if(nextMoveTick === tick) {
      if(nextNodeIndex >= props.path.length) {
        // remove
        removeUnit(props.unit.key);
      } else {
        // move
        updateUnit({
          ...props.unit,
          nodeKey: props.path[nextNodeIndex],
          createdTick: tick,
          lastPathIndex: currentNodeIndex
        })
        
      }

    }
    // console.log("Unit created", props.unit.createdTick, tick);
  }, [props, removeUnit, tick, updateUnit]);
  
  // if(props.path.length < 1 || unitPath.length < 1) {
  //   return <></>
  // }
  // console.log(props.path)

  const container = {
    position: "relative",
  };

  const item = {
    position: "absolute",

    padding: "10px",
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
  };
  return (
    <Box sx={container}>
      <Box sx={item}>{props.unit.displayName} <br/> {props.unit.live}</Box>
    </Box>
  );
}
