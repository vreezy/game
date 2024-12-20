import { useShallow } from "zustand/shallow";

import { useBoundStore } from "../../stores/boundStore";
import { Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function Resources(): React.ReactElement {
  const [tick, demographies, resources, getMaxResources] = useBoundStore(
    useShallow((state) => [
      state.tick,
      state.demographies,
      state.resources,
      state.getMaxResources,
    ])
  );

  return (
    <Stack direction="row" spacing={2}>
      <Item>tick: {tick}</Item>
      <Item>age: {demographies().age}</Item>
      <Item>
        wheat: {resources().wheat}/ {getMaxResources().wheat ?? 0}
      </Item>
      <Item>
        wood: {resources().wood} / {getMaxResources().wood ?? 0}
      </Item>
      <Item>
        stone: {resources().stone} / {getMaxResources().stone ?? 0}
      </Item>
      <Item>
        faith: {resources().faith} / {getMaxResources().faith ?? 0}
      </Item>
      <Item>
        trust: {resources().trust} / {getMaxResources().trust ?? 0}
      </Item>
      <Item>
        happiness: {resources().happiness} / {getMaxResources().happiness ?? 0}
      </Item>
      <Item>
        gold: {resources().gold} / {getMaxResources().gold ?? 0}
      </Item>
      <Item>
        population: {resources().population}/{getMaxResources().population}
      </Item>
    </Stack>
  );
}
