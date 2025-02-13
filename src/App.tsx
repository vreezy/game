import "./App.css";
import { Tick } from "./components/tick/Tick";
import { Resources } from "./components/resources/Resources";
// import { Buildings } from "./components/buildings/Buildings";
import { Options } from "./components/options/Options";
import { Age } from "./components/age/age";
import { Speed } from "./components/speed/Speed";
import { TechTree } from "./components/TechTree/TechTree";
import { PayTick } from "./components/tick/PayTick";
import { Box, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Graph } from "./components/graph/Graph";
import { BuildMenu } from "./components/buildings/BuildMenu";
import { WaveTick } from "./components/tick/WaveTick";
import { FightTick } from "./components/tick/FightTick";
import { MoveTick } from "./components/tick/MoveTick";
import { UpdatePath } from "./components/tick/UpdatePath";

function App() {
  const gridContainer = {
    display: "grid",
    gridTemplateRows: "50px auto 50px",
    width: "100vw",
    height: "100%",
  };

  return (
    <>
      <CssBaseline />

      <Box component="main" sx={gridContainer}>
        <Grid
          container
          size={12}
          spacing={2}
          justifyContent="space-between"
          sx={{ border: "2px solid red", overflow: "auto" }}
          
        >
          <Grid size={8}>
            <Resources />
          </Grid>
          <Grid size={4}>
            <Speed />
          </Grid>
        </Grid>

        <Grid
          container
          size={12}
          flexGrow={1}
          sx={{ overflow: "auto", flex: 1, border: "2px solid green" }}
        >
          {/* <Buildings /> */}
          <Graph />
        </Grid>

        <Grid
          container
          size={12}
          spacing={2}
          justifyContent="space-between"
          sx={{ border: "2px solid blue", overflow: "auto"  }}
        >
          <Grid size={8}>
            <Options />
          </Grid>
          <Grid size={4}>
            <Age />
          </Grid>
        </Grid>
      </Box>

      <Tick />
      <PayTick />
      <MoveTick />
      <FightTick />
      <WaveTick />
      <UpdatePath />
      
      <TechTree />
      <BuildMenu />
    </>
  );
}

export default App;
