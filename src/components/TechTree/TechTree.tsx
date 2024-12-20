import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";

import { Tech } from "./Tech";

export function TechTree() {

  const [tick, economy, infrastructure, military, science, culture] = useBoundStore(
    useShallow((state) => [state.tick, state.economy, state.infrastructure, state.military, state.science, state.culture])
  );
  console.log("render TechTree", tick)

  return (
    <div>
      <h2>TechTree</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, auto)',
        gridGap: '1rem',

        border: '1px solid black',
        

      }}>

        <div>{economy.map((tech) => <Tech key={tech.key} tech={tech} treeKey={"economy"}/>)}</div>
        <div>{infrastructure.map((tech) => <Tech key={tech.key}  tech={tech} treeKey={"infrastructure"}/>)}</div>
        <div>{military.map((tech) => <Tech key={tech.key} tech={tech} treeKey={"military"}/>)}</div>
        <div>{science.map((tech) => <Tech key={tech.key}  tech={tech} treeKey={"science"}/>)}</div>
        <div>{culture.map((tech) => <Tech key={tech.key}  tech={tech} treeKey={"culture"}/>)}</div>

      </div>
    </div>
  )
}