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
      <PayTick />
      <Box component="main" sx={{
        width: "100vw", 
        height: "100vh",
      }}>
        <Tick>
          <Grid container spacing={2} >
            <Grid size={8}>
              <Resources />
            </Grid>
            <Grid size={4}>
              <Speed />
            </Grid>

            <Grid size={8} sx={{overflow: "auto"}}>
              <Buildings />
            </Grid>

            <Grid size={8}>
              <Options />
              <Age />
            </Grid>
          </Grid>

          <TechTree />

        </Tick>
      </Box>
    </>
  );
}

export default App;
