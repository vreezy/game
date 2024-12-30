import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { Building } from "./Building";

export default function HandleBuildings() {
  const [buildings] = useBoundStore(
    useShallow((state) => [state.buildings])
  );

  return buildings.map((building) => <Building key={building.key} building={building} color={building.type === "cave" ? "red" : "green"} />);
}
