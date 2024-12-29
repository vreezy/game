import { Box } from "@react-three/drei";
import { INode } from "../../interfaces/INode";
import { IUnit } from "../../interfaces/IUnit";

export interface IUnitProps {
  node: INode;
  unit: IUnit;
}

export function Unit(props: IUnitProps) {
  return (
    <Box
      args={[0.8, 0.8, 1]}
      position={[props.node[0], props.node[1], 1]}
    >
      <meshBasicMaterial color={"blue"} />
    </Box>
  );
}
