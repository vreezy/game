import { Box} from "@mui/material";
import { GRAPH_SIZE } from "../const/graph";

interface LayerProps extends React.PropsWithChildren {
  muh?: string;
}

export function Layer(props: Readonly<LayerProps>): React.ReactElement {
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: `repeat(${GRAPH_SIZE[0]}, 100px)`,
    gridTemplateRows: `repeat(${GRAPH_SIZE[1]}, 100px)`,
    width: "100%",
  };

  return (
    <Box sx={gridContainer}>
      {props.children}
    </Box>
  );
}