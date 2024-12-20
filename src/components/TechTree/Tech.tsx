import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";
import React from "react";
import { ITech } from "../../interfaces/ITech";
import { ITechTree } from "../../interfaces/ITechTree";

interface TechProps {
  tech: ITech;
  treeKey: keyof ITechTree;
}
export function Tech(props:TechProps): React.ReactElement {
  const [activeTechKey, setActiveTech] = useBoundStore(
    useShallow((state) => [state.activeTechKey, state.setActiveTech])
  );

  const isActiveTech = props.tech.key === activeTechKey;

  console.log("render tech:", props.tech.displayName)
  return (
    <button
    onClick={() => {setActiveTech(props.tech.key)}}
      style={{
        border: `2px solid ${isActiveTech ? "red": "black"}`,
        borderRadius: '5px',
        width: "100%"
      }}
    >
      <h4>{props.tech.displayName}</h4>
      <p>{props.tech.description}</p>
      <p>{props.tech.paid} / {props.tech.cost} </p>
    </button>
  );
}