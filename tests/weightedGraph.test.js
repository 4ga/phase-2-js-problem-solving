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
});
