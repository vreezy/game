import { IGameObject } from "../interfaces/IGameObject";

  export function sortByCreatedTick(a: IGameObject, b: IGameObject) {
    if (a.createdTick < b.createdTick) {
      return -1;
    }
    if (a.createdTick > b.createdTick) {
      return 1;
    }
    return 0;
  }