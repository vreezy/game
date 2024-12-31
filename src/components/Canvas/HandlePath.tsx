import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Tile } from "./Tile";
import { getNodeKey } from "../../utils/getNodeKey";
import { IPosition } from "../../interfaces/IPosition";


export default function HandlePath() {
  const [path, nodes] = useBoundStore(
    useShallow((state) => [state.path, state.nodes])
  );

  return path.map((tile) => {
  
    const position2d = nodes.find((node) => getNodeKey(node) === tile);
    if (!position2d) {
      return null;
    }

    const position: IPosition = [position2d[0], 2, position2d[1]];

    return <Tile key={tile} position={position} mesh={{ color: "yellow" }} />
  
  });
}
