import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Tile } from "./Tile";
import { getNodeKey } from "../../utils/getNodeKey";
import { IPosition } from "../../interfaces/IPosition";
import { INode } from "../../interfaces/INode";
import { ThreeEvent } from "@react-three/fiber";

export default function HandleSelector() {
  const [nodes, setSelectedNodeKey] = useBoundStore(
    useShallow((state) => [state.nodes, state.setSelectedNodeKey])
  );

  function _handleClick(e: ThreeEvent<MouseEvent>, node: INode): void {
    e.stopPropagation();
    setSelectedNodeKey(getNodeKey(node))
  }

  return nodes.map((node) => {
  
    
    const position: IPosition = [node[0], 2, node[1]];

    return <Tile key={getNodeKey(node)} onClick={(e) => _handleClick(e, node)} position={position} mesh={{transparent: true, opacity: 0.2}} boxArgs={[1,1,1]}/>
  
  });
}


