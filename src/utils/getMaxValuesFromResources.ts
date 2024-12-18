import { IResources } from "../interfaces/IResources";

export function getMaxValuesFromResources(resources: Partial<IResources>[]): Partial<IResources> {
    const max: Partial<IResources> = {};
    resources.forEach((resource) => {
      Object.keys(resource).forEach((key) => {
          const resourceKey = key as keyof IResources;
          max[resourceKey] = resource[resourceKey];
      });
    });
    return max;
}