import {describe, it, expect} from "vitest";
import Graph from "../src/Graph.js";

describe("graph starts with an empty adjacency list", () => {
 it("graph start with an empty adjacency list", () => {
  const graph = new Graph();
  
  expect(graph.adjacencyList).toEqual({});
 });
 
 it("addVertex adds a vertex with an empty neighbors list", () => {
  const graph = new Graph();

  graph.addVertex("A");

  expect(graph.adjacencyList).toEqual({A:[],});
 }); 
 
 it("addVertex does not overwrite an existing vertex", () => {
  const graph = new Graph();

  graph.addVertex("A");
  graph.adjacencyList.A.push("B");
  
  graph.addVertex("A");

  expect(graph.adjacencyList).toEqual({A: ["B"]});
 });

 it("addEdge connects two vertices in both directions", () => {
  const graph = new Graph();
  
  graph.addVertex("A");
  graph.addVertex("B");

  graph.addEdge("A", "B");

  expect(graph.adjacencyList).toEqual({A:["B"], B:["A"]});
 });

 it("addEdge creates missing vertices before connecting them", () => {
  const graph = new Graph();

  graph.addEdge("A", "B");

  expect(graph.adjacencyList).toEqual({
   A:["B"], B:["A"]
  });
 });

 it("addEdge does not duplicate an existing edge", () => {
  const graph = new Graph();

  graph.addEdge("A", "B");
  graph.addEdge("A", "B");

  expect(graph.adjacencyList).toEqual({A:["B"], B:["A"]})
 });

 it("addEdge allows a vertex to have multiple neighbors", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");


  expect(graph.adjacencyList).toEqual({A:["B", "C"], B:["A"], C:["A"]});
 });
});
