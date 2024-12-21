import { IResources } from "../interfaces/IResources";

export function createResources(resources?: Partial<IResources>): IResources {
  return {
    wheat: resources?.wheat ?? 0,
    wood: resources?.wood ?? 0,
    stone: resources?.stone ?? 0,
    faith: resources?.faith ?? 0,
    trust: resources?.trust ?? 0,
    happiness: resources?.happiness ?? 0,
    gold: resources?.gold ?? 0,
    population: resources?.population ?? 0,
    science: resources?.science ?? 0,
  }
}