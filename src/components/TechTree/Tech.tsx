import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";
import { ITech, ITechTree } from "../const/developings";
import React from "react";

interface TechProps {
  tech: ITech;
  treeKey: keyof ITechTree;
}
export function Tech( props:TechProps): React.ReactElement {
  const [tick, payTech, setTechActive] = useBoundStore(
    useShallow((state) => [state.tick, state.payTech, state.setTechActive])
  );

  console.log("render tech", props.tech.key);

  const [lockTick, setLockTick] = React.useState(tick);

  React.useLayoutEffect(() => {
    if (lockTick < tick) {
      setLockTick(tick);

      if (props.tech.active) {
        payTech(props.treeKey, props.tech.key, 1);
      }
    }
  }, [props.treeKey, props.tech.key, props.tech.active, payTech, tick, lockTick, setLockTick]);


  return (
    <button
    onClick={() => {setTechActive(props.treeKey, props.tech.key)}}
      style={{
        border: `2px solid ${props.tech.active ? "red": "black"}`,
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