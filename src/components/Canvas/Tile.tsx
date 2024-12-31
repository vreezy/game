import { Box } from "@react-three/drei";
import * as React from "react";


import { IPosition } from "../../interfaces/IPosition";
import { ExtendedColors, NodeProps, Overwrite, ShapeProps, ThreeEvent } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, MeshBasicMaterial, MeshBasicMaterialParameters, NormalBufferAttributes, Object3DEventMap } from "three";
import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";


export interface ITileProps extends React.ComponentProps<"group"> {
  position: IPosition;
  boxArgs?: [number, number, number];
  box?: ForwardRefComponent<ShapeProps, Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>
  mesh?: ExtendedColors<Overwrite<Partial<MeshBasicMaterial>, NodeProps<MeshBasicMaterial, [MeshBasicMaterialParameters]>>>
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
}

export function Tile(props: ITileProps) {
  return (
    <group {...props} >
      <Box
         args={props.boxArgs ? props.boxArgs : [0.8, 0.2, 0.8]}
        // position={props.position}
        {...props.box}
        
      >
        <meshBasicMaterial {...props.mesh} />
      </Box>
    </group>
  );
}
