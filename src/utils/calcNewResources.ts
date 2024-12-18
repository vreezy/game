import { IResources } from "../interfaces/IResources";

export function calcNewResources(cost: Partial<IResources>, currentResources: IResources, operator: "increase" | "decrease"): Partial<IResources> {
  
  const newResources: Partial<IResources> = {
    gold: 10000
  }

  Object.keys(cost).forEach((key) => {
    const resourceKey = key as keyof IResources;
    if(cost[resourceKey] && operator === "decrease") {
      newResources[resourceKey] = currentResources[resourceKey] - cost[resourceKey];
    }

    if( cost[resourceKey] && operator === "increase") {
      newResources[resourceKey] = currentResources[resourceKey] + cost[resourceKey];
    }
  })
    
  return newResources
}