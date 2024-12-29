import { Box } from "@react-three/drei";
import { INode } from "../../interfaces/INode";

export interface IUnitProps {
  node: INode;
  color: string;
}

export function Tile(props: IUnitProps) {
  return (
    <Box
      args={[0.8, 0.8, 1]}
      position={[props.node[0], 8, props.node[1]]}
    >
      <meshBasicMaterial color={props.color} />
    </Box>
  );
}
