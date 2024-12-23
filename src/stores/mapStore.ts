import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { EngineStoreState } from "./engineStore";

import Graph from "node-dijkstra";
import { INode } from "../interfaces/INode";
import { getNodeKey } from "../utils/getNodeKey";
import { GRAPH_SIZE, UNIT_ENTRY, UNIT_EXIT } from "../components/const/graph";

// @types/node-dijkstra has no export -_-
interface PathOption {
  trim?: boolean | undefined; // Exclude the origin and destination nodes from the result
  reverse?: boolean | undefined; // Return the path in reversed order
  cost?: boolean | undefined; // Also return the cost of the path when set to true
  avoid?: INode[] | undefined; // ???
}

interface ExtendedPathOption extends PathOption {
  blockingNode?: INode | undefined;
}

// @types/node-dijkstra has no export -_-
interface PathResult {
  path: string[];
  cost: number;
}

export interface IMap {
  nodes: INode[];
  selectedNodeKey: string | null;
}

export interface MapStoreState extends IMap {
  setSelectedNodeKey: (selectedNodeKey: string | null) => void;
  getNodeByKey: (nodeKey: string) => INode | undefined;
  getRoute: (
    from: string,
    to: string,
    options?: ExtendedPathOption
  ) => string[] | PathResult;
  isBlockingRoute: (from: string, to: string, node: INode) => boolean;
  resetMapStore: () => void;
}

// https://www.redblobgames.com/pathfinding/tower-defense/
// https://www.redblobgames.com/pathfinding/grids/graphs.html
function getNodes(maxX = GRAPH_SIZE[1], maxY = GRAPH_SIZE[0]): INode[] {
  const nodes = [];

  for (let x = 0; x < maxX; x++) {
    for (let y = 0; y < maxY; y++) {
      nodes.push([x, y]);
    }
  }

  return nodes;
}

function getNeighbors(node: INode): INode[] {
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const result = [];
  for (const dir of dirs) {
    const neighbor = [node[0] + dir[0], node[1] + dir[1]];
    if (
      0 <= neighbor[0] &&
      neighbor[0] < GRAPH_SIZE[1] &&
      0 <= neighbor[1] &&
      neighbor[1] < GRAPH_SIZE[0]
    ) {
      result.push(neighbor);
    }
  }

  return result;
}

function getNodeGraphs(node: INode): Map<string, number> {
  const graph = new Map();
  const neighbors = getNeighbors(node);

  for (const neighbor of neighbors) {
    graph.set(getNodeKey(neighbor), 1);
  }

  return graph;
}

function getGraphRoute(nodes: INode[]): Graph {
  const graph = new Map();

  for (const node of nodes) {
    graph.set(getNodeKey(node), getNodeGraphs(node));
  }

  const route = new Graph(graph);
  return route;
}

export const mapStore: StateCreator<
  BuildingsStoreState &
    DemographyStoreState &
    EngineStoreState &
    ResourcesStoreState &
    TechStoreState &
    MapStoreState &
    SharedStoreState,
  [],
  [],
  MapStoreState
> = (set, get) => ({
  nodes: getNodes(),
  selectedNodeKey: null,
  getRoute: (from, to, options = undefined) => {
    const nodes = get().nodes;
    const nodeKeys = get().buildings.map((b) => b.nodeKey);
    const filteredNodes = nodes.filter((node) => {
      if (getNodeKey(node) === UNIT_EXIT || getNodeKey(node) === UNIT_ENTRY) {
        return true;
      }

      if(options?.blockingNode && getNodeKey(node) === getNodeKey(options.blockingNode)) {
        return false;
      }

      return !nodeKeys.includes(getNodeKey(node));
    });
    const route = getGraphRoute(filteredNodes);
    return route.path(from, to, options);
  },
  getNodeByKey: (nodeKey) => {
    return get().nodes.find((node) => getNodeKey(node) === nodeKey);
  },
  setSelectedNodeKey: (selectedNodeKey) => {
    set(() => ({ selectedNodeKey }));
  },
  isBlockingRoute: (from, to, node) => {
    
    
    const route = get().getRoute(from, to, { blockingNode: node });
    console.log("blocking",node, route);
    if (Array.isArray(route)) {
      
      return false;
    }
 

    return true;
    
    
  },
  resetMapStore: () => {
    set(() => ({
      nodes: getNodes(),
      selectedNodeKey: null,
    }));
  },
});
