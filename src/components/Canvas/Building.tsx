import { Box } from "@react-three/drei";

import { IBuilding } from "../../interfaces/IBuilding";

export interface IBuildingProps {
  building: IBuilding;
  color: string;
}

export function Building(props: IBuildingProps) {
  return (
    <Box
      args={[0.8, 0.8, 1]}
      position={props.building.position}
    >
      <meshBasicMaterial color={props.color} />
    </Box>
  );
}
