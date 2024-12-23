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
  const [tick] = useBoundStore(useShallow((state) => [state.tick]));

  const [unitPath, setUnitPath] = React.useState<string[]>(props.path.slice(1, props.path.length));

  React.useEffect(() => {
    console.log("Unit created", props.unit.createdTick, tick);
  }, [props, tick]);
  
  if(props.path.length < 1 || unitPath.length < 1) {
    return <></>
  }
  console.log(props.path)

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
      <Box sx={item}>{props.unit.displayName}</Box>
    </Box>
  );
}
