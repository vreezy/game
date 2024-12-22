import { INode } from "../interfaces/INode";

export function getNodeKey(node: INode): string {
  return `X${node[0]}Y${node[1]}`
}