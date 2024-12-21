import "./App.css";
import { Tick } from "./components/tick/Tick";
import { Resources } from "./components/resources/Resources";
import { Buildings } from "./components/buildings/Buildings";
import { Options } from "./components/options/Options";
import { Age } from "./components/age/age";
import { Speed } from "./components/speed/Speed";
import { TechTree } from "./components/TechTree/TechTree";
import { PayTick } from "./components/PayTick/PayTick";
import { Box, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid2";
function App() {
  return (
    <>
      <CssBaseline />

      <Box
        component="main"
        sx={{
          border: "2px dotted pink",
          width: "100vw",
          height: "100vh",
          
        }}
      >
        <Grid container columnSpacing={0} sx={{ minHeight: "100%", border: "2px solid black" }}>
          <Grid container size={12} spacing={2} justifyContent="space-between" sx={{ border: "2px solid red"}}>
            <Grid size={8}>
              <Resources />
            </Grid>
            <Grid size={4}>
              <Speed />
            </Grid>
          </Grid>

          <Grid container size={12} flexGrow={1} sx={{ overflow: "auto", flex: 1, border: "2px solid green" }}>
            <Buildings />
          </Grid>

          <Grid container size={12} spacing={2} justifyContent="space-between" sx={{  border: "2px solid blue"}}>
            <Grid size={8}>
              <Options />
            </Grid>
            <Grid size={4}>
              <Age />
            </Grid>
          </Grid>
        </Grid>

        <Tick />
        <PayTick />
        <TechTree />
      </Box>
    </>
  );
}

export default App;
