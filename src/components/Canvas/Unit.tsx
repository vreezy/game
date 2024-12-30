import { Box } from "@react-three/drei";
import { IUnit } from "../../interfaces/IUnit";

export interface IUnitProps {
  unit: IUnit;
}

export function Unit(props: IUnitProps) {
  return (
    <Box
      args={[0.8, 0.8, 1]}
      position={props.unit.position}
    >
      <meshBasicMaterial color={"blue"} />
    </Box>
  );
}
