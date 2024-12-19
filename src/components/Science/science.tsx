import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../../stores/boundStore";
import { IDeveloping } from "../const/developings";

export function Science() {

  const [getDeveloping] = useBoundStore(
    useShallow((state) => [state.getDeveloping,])
  );

  const developing = getDeveloping();


  return (
    <div>
      <h2>Science</h2>
      {Object.keys(developing).map((key) => {
        const currentKey = key as keyof IDeveloping;
        return (
          
          <div key={key}>
            {developing[currentKey].map((item) => {
              return (
                <div key={item.key}>
                  
                  <div>{item.displayName}</div>
                  <div>{item.description}</div>

                  
                  
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  )
}