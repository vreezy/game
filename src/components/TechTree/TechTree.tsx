import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";

import { Tech } from "./Tech";
import { ITechTree } from "../../interfaces/ITechTree";
import { Box, Modal } from "@mui/material";

export function TechTree() {
  const [lastPayTechTick, getTechTree, showTechTree, toggleTechTree] =
    useBoundStore(
      useShallow((state) => [
        state.lastPayTechTick,
        state.getTechTree,
        state.showTechTree,
        state.toggleTechTree,
      ])
    );
  console.log("render TechTree", lastPayTechTick);

  const techTree = getTechTree();
  const treeKeys = Object.keys(techTree) as (keyof ITechTree)[];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    overflow: "scroll",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={showTechTree}
      onClose={toggleTechTree}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>TechTree</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, auto)",
            gridGap: "1rem",
          }}
        >
          {treeKeys.map((treeKey) => {
            return (
              <div key={treeKey}>
                {techTree[treeKey].map((tech) => (
                  <Tech key={tech.key} tech={tech} treeKey={treeKey} />
                ))}
              </div>
            );
          })}
        </div>
      </Box>
    </Modal>
  );
}
