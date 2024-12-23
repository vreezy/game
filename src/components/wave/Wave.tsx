import React from "react";
import { useBoundStore } from "../../stores/boundStore";
import { useShallow } from "zustand/shallow";
import { WAVES } from "../const/waves";
import { createUnit } from "../../Models/createUnit";


export function Wave() :React.ReactElement {
  
    const [tick, addUnit] = useBoundStore(
      useShallow((state) => [state.tick, state.addUnit])
    );

    React.useEffect(() => {
      const wave = WAVES.find((wave) => tick === wave.createTick)
      if(wave) {
        for(let i = 0; i < wave.mass; i++) {
          addUnit(createUnit(wave.type, tick));
        }
        
      }
    }, [addUnit, tick]);

    return <></>
}