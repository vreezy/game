import { IResources } from "../interfaces/IResources";

export function hasEnoughResources(
  resources: IResources,
  cost: Partial<IResources>
): boolean {
  // we need to iterate over every key and check if the resources are enough
  const check = Object.keys(cost).every((key) => {
    const x = resources[key as keyof IResources];
    const y = cost[key as keyof IResources] ?? 0; // 0 can´t be happen because we iterate over every key
    
    return x >= y;
  });
  return check;
}
