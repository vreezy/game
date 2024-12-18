import { IResources } from "../interfaces/IResources";

export function calcNewResources(cost: Partial<IResources>, currentResources: Partial<IResources>, operator: "increase" | "decrease"): Partial<IResources> {
  
  const newResources: Partial<IResources> = {
    gold: 10000
  }
  Object.keys(cost).forEach((key) => {
    const resourceKey = key as keyof IResources;
    if(currentResources[resourceKey] && cost[resourceKey] && operator === "decrease") {
      newResources[resourceKey] = currentResources[resourceKey] - cost[resourceKey];
    }

    if(currentResources[resourceKey] && cost[resourceKey] && operator === "increase") {
      newResources[resourceKey] = currentResources[resourceKey] + cost[resourceKey];
    }
  })
    
  return newResources
}