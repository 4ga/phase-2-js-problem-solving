import {describe, it, expect} from "vitest";
import WeightedGraph from "../src/WeightedGraph.js";

describe("weighted graph tests", () => {
 it("weighted graph starts with an empty adjacency list", () => {
  const graph = new WeightedGraph();

  expect(graph.adjacencyList).toEqual({});
 });

 it("addVertex adds a vertex with an empty neighbors list", () => {
  const graph = new WeightedGraph();

  graph.addVertex("A");
  expect(graph.adjacencyList).toEqual({A: [], });
 });

 it("addEdge connects two vertices with a weight in both direction", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 4);
  
  expect(graph.adjacencyList).toEqual({
   A: [{vertex: "B", weight: 4}],
   B: [{vertex: "A", weight: 4}],
  });
 });
 
 it("addEdge allows a vertex to have multiple weighted neighbors", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);

  expect(graph.adjacencyList).toEqual({
   A: [
     { vertex: "B", weight: 4},
     { vertex: "C", weight: 2},
   ],
   B: [{vertex: "A", weight: 4}],
   C: [{vertex: "A", weight: 2}],
  });
 });

 it("addEdge does not duplicate an existing weighted edge", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "B", 4);

  expect(graph.adjacencyList).toEqual({
   A: [{ vertex: "B", weight: 4 }],
   B: [{ vertex: "A", weight: 4 }],
  });
 });

 it("addEdge does not overwrite the weight of an existing edge", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "B", 10);

  expect(graph.adjacencyList).toEqual({
   A: [{vertex: "B", weight: 4}],
   B: [{vertex: "A", weight: 4}],
  });
 });

 it("dijkstra returns an empty array if one or both vertices do not exist", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 4);

  expect(graph.dijkstra("A", "X")).toEqual([]);
  expect(graph.dijkstra("X", "B")).toEqual([]);
  expect(graph.dijkstra("X", "Y")).toEqual([]);;
 });

 it("dijkstra returns the source when source and target are the same vertex", () => {
  const graph = new WeightedGraph();

  graph.addVertex("A");

  expect(graph.dijkstra("A", "A")).toEqual(["A"]);
 });

 it("dijkstra returns a direct path between connected vertices", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 4);

  expect(graph.dijkstra("A", "B")).toEqual(["A", "B"]);
 });

 it("dijkstra chooses a cheaper indirect path over a direct expensive path", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("C", "B", 1);

  expect(graph.dijkstra("A", "B")).toEqual(["A", "C", "B"]);
 });

 it("dijkstra finds the lowest total cost path through multiple vertices", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 1);
  graph.addEdge("B", "D", 10);
  graph.addEdge("A", "C", 2);
  graph.addEdge("C", "D", 2);

  expect(graph.dijkstra("A", "D")).toEqual(["A", "C", "D"]);
 });

 it("dijkstra returns an empty array when no path exists", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 1);
  graph.addEdge("C", "D", 1);

  expect(graph.dijkstra("A", "D")).toEqual([]);
 });

 it("dijkstra handles cycles without stuck", () => {
  const graph = new WeightedGraph();

  graph.addEdge("A", "B", 1);
  graph.addEdge("B", "C", 1);
  graph.addEdge("C", "A", 1);
  graph.addEdge("C", "D", 2);

  expect(graph.dijkstra("A", "D")).toEqual(["A", "C", "D"]);
 });
});
