import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Tile } from "./Tile";
import { getNodeKey } from "../../utils/getNodeKey";

export default function HandleBuildings() {
  const [buildings, getNodes] = useBoundStore(
    useShallow((state) => [state.buildings, state.getNodes])
  );

  return buildings.map((building) => {
    const node = getNodes().find(
      (node) => getNodeKey(node) === building.nodeKey
    );
    if (node) {
      return <Tile key={building.key} node={node} color={"red"} />;
    }
    return null;
  });
}
