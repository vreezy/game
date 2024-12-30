import { Box } from "@react-three/drei";


import { IPosition } from "../../interfaces/IPosition";

export interface ITileProps {
  position: IPosition;
}

export function Tile(props: ITileProps) {
  return (
    <Box
      args={[0.8, 0.2, 0.8]}
      position={props.position}
      
    >
      <meshBasicMaterial color={"yellow"} />
    </Box>
  );
}
