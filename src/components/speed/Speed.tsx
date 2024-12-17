import { useShallow } from "zustand/shallow";

import { useEngineStore } from "../../stores/engineStore";

export function Speed() {
  const [speed, setSpeed] = useEngineStore(
    useShallow((state) => [state.speed, state.setSpeed])
  );

  return (
    <div>
      speed {speed}
      <button disabled={speed === 1} onClick={() => setSpeed(1)}>
        1{">"}
      </button>
      <button disabled={speed === 2} onClick={() => setSpeed(2)}>
        2{">>"}
      </button>
      <button disabled={speed === 3} onClick={() => setSpeed(3)}>
        3{">>>"}
      </button>
    </div>
  );
}
