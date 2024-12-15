import { IResources } from "../interfaces/IResources";

export function hasEnoughResources(
  resources: IResources,
  cost: Partial<IResources>
): boolean {
  const check = Object.keys(cost).every((key) => {
    const x = resources[key as keyof IResources];
    const y = cost[key as keyof IResources] ?? 0;
    
    return x > y;
  });
  return check;
}
