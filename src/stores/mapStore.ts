import { StateCreator } from "zustand";
import { BuildingsStoreState } from "./buildingsStore";
import { DemographyStoreState } from "./demographyStore";
import { ResourcesStoreState } from "./resourcesStore";
import { SharedStoreState } from "./shareStore";
import { TechStoreState } from "./techStore";
import { EngineStoreState } from "./engineStore";

import Graph from "node-dijkstra";

export interface IMap {
  graph: Map<string, number>;
}

export interface MapStoreState extends IMap {
  getRoute: (from: string, to: string) => string[];
  resetMapStore: () => void;
}

type INode = number[]

// https://www.redblobgames.com/pathfinding/grids/graphs.html
function getNodes(maxX = 20, maxY = 10): INode[] {
  const nodes = [];

  for (let x = 0; x < maxX; x++) {
    for (let y = 0; y < maxY; y++) {
      nodes.push([x, y]);
    }
  }

  return nodes
}

function getNeighbors(node: INode): INode[] {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const result = []
    for (const dir of dirs) {
        result.push([node[0] + dir[0], node[1] + dir[1]])
    }
    
    return result
}

function getMapName(node: INode): string {
  return `(X${node[0]}Y${node[1]})`
}

function getGraph(node: INode): Map<string, number> {
  
  const graph = new Map()
  const neighbors = getNeighbors(node)

  for (const neighbor of neighbors) {
    graph.set(getMapName(neighbor), 1)
  }

  return graph
}

function getRoute(): Graph {
  const graph = new Map();

  const nodes = getNodes()
  for (const node of nodes) {
    graph.set(getMapName(node), getGraph(node))
  }

  const route = new Graph(graph);
  return route
}



export const mapStore: StateCreator<
  BuildingsStoreState & DemographyStoreState & EngineStoreState & ResourcesStoreState & TechStoreState & MapStoreState & SharedStoreState,
  [],
  [],
  MapStoreState
> = (set) => ({
    graph: getGraph(),
    getRoute: (from, to) => {
      const route = getRoute()
    },
    resetMapStore: () => {
      set(() => ({graph: getGraph()}));
    }
});
