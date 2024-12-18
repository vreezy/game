import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";

export function Speed() {
  const [speed, setSpeed] = useBoundStore(
    useShallow((state) => [state.speed, state.setSpeed])
  );

  return (
    <div>
      speed {speed}
      <button disabled={speed === 0} onClick={() => setSpeed(0)}>
        Pause
      </button>
      <button disabled={speed === 1} onClick={() => setSpeed(1)}>
        {">"}
      </button>
      <button disabled={speed === 2} onClick={() => setSpeed(2)}>
        {">>"}
      </button>
      <button disabled={speed === 3} onClick={() => setSpeed(3)}>
        {">>>"}
      </button>
    </div>
  );
}
