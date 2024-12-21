import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";
import React from "react";
import { ITech } from "../../interfaces/ITech";
import { ITechTree } from "../../interfaces/ITechTree";

interface TechProps {
  tech: ITech;
  treeKey: keyof ITechTree;
}
export function Tech(props: TechProps): React.ReactElement {
  const [activeTechKey, setActiveTech, isTechAvailable] = useBoundStore(
    useShallow((state) => [
      state.activeTechKey,
      state.setActiveTech,
      state.isTechAvailable,
    ])
  );

  const isActiveTech = props.tech.key === activeTechKey;
  const isAvailable = isTechAvailable(props.treeKey, props.tech.techKey);

  function getBorderColor(): string {
    if (isActiveTech) {
      return "blue";
    }

    if (isAvailable) {
      return "green";
    }

    return "red";
  }

  return (
    <button
      disabled={!isAvailable}
      onClick={() => {
        setActiveTech(props.tech.key);
      }}
      style={{
        border: `2px solid ${getBorderColor()}`,
        borderRadius: "5px",
        width: "100%",
      }}
    >
      <h4>{props.tech.displayName}</h4>
      <p>{props.tech.description}</p>
      <p>
        {props.tech.paid} / {props.tech.cost}{" "}
      </p>
    </button>
  );
}
