import { Box } from "@mui/material";
import { IUnit } from "../../interfaces/IUnit";
import React from "react";


interface IUnitProps {
  unit: IUnit;
  path: string[] 
}

export function Unit(props: IUnitProps): React.ReactElement {
 

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
      <Box sx={item}>{props.unit.displayName} <br/> {props.unit.health} <br/> {props.unit.modifiedTick} X {props.unit.createdTick}</Box>
    </Box>
  );
}
