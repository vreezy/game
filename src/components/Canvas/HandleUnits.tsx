import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";

import { getNodeKey } from "../../utils/getNodeKey";
import { Unit } from "./Unit";
import { useFrame } from "@react-three/fiber";

export default function HandleUnits() {
  const [units, getNodes] = useBoundStore(
    useShallow((state) => [state.units, state.getNodes])
  );

  useFrame((state, delta) => {


    units.forEach((unit, index) => {
 

      handleEnemyUpdate(enemy, delta);

  })
});

  return units.map((unit) => {
    const node = getNodes().find(
      (node) => getNodeKey(node) === unit.nodeKey
    );
    if (node) {
      return <Unit key={unit.key} node={node} unit={unit}/>;
    }
    return null;
  });
}
