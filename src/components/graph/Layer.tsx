import { Box} from "@mui/material";
import { GRAPH_SIZE, TILE_SIZE } from "../const/graph";


interface LayerProps extends React.PropsWithChildren {
  zIndex?: string;
}

export function Layer(props: Readonly<LayerProps>): React.ReactElement {
  const gridContainer = {
    display: "grid",
    position: "absolute",
    zIndex: props.zIndex ?? "auto",
    gridTemplateColumns: `repeat(${GRAPH_SIZE[0]}, ${TILE_SIZE}px)`,
    gridTemplateRows: `repeat(${GRAPH_SIZE[1]}, ${TILE_SIZE}px)`,
    width: "100%",
  };

  return (
    <Box sx={gridContainer}>
      {props.children}
    </Box>
  );
}