import { Box} from "@mui/material";

interface LayerProps extends React.PropsWithChildren {
  muh?: string;
}

export function Layer(props: Readonly<LayerProps>): React.ReactElement {
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(20, 1fr)",
    gridTemplateRows: "repeat(10, 1fr)",
    width: "100%",
  };

  return (
    <Box sx={gridContainer}>
      {props.children}
    </Box>
  );
}