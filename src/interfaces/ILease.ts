import { IResources } from "./IResources";

// Lease
export interface ILease  {
  moduloTick: number;
  resources: Partial<IResources>
}