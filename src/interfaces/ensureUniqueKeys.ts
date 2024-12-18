export declare function ensureUniqueKeys<T extends object[] & {
  [I in keyof T]: {
    [K in keyof T[I]]: K extends {
      [J in keyof T]: J extends I ? never : keyof T[J]
    }[number] ? never : T[I][K]
  }
}>(...args: T): void;