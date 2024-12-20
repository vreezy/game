import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";
import { ITech, ITechTree } from "../const/developings";
import React from "react";

interface TechProps {
  tech: ITech;
  treeKey: keyof ITechTree;
}
export function Tech( props:TechProps): React.ReactElement {
  const [activeTechKey, setActiveTech] = useBoundStore(
    useShallow((state) => [state.activeTechKey, state.setActiveTech])
  );

  return (
    <button
    onClick={() => {setActiveTech(props.tech.key)}}
      style={{
        border: `2px solid ${props.tech.key === activeTechKey ? "red": "black"}`,
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