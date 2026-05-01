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

 it("breadthFirst returns an empty array when the start vertex does not exist", () => {
  const graph = new Graph();
  
  expect(graph.breadthFirst("A")).toEqual([]);
 });

 it("breadthFirst returns the start vertex when it has no neighbors", () => {
  const graph = new Graph();

  graph.addVertex("A");
  expect(graph.breadthFirst("A")).toEqual(["A"]);
 });

 it("breathFirst visits the start vertex and its direct neighbors", () => {
  const graph = new Graph();
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");

  expect(graph.breadthFirst("A")).toEqual(["A", "B", "C"]);
 });

 it("breadthFirst visits vertices level by level in a connected graph", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");

  expect(graph.breadthFirst("A")).toEqual(["A", "B", "C", "D", "E"]);
 });

 it("breadthFirst handles cycles without visiting vertices twice", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "A");

  expect(graph.breadthFirst("A")).toEqual(["A", "B", "C"]);
 });

 it("breadthFirst only visits vertices connected to the start vertex", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("C", "D");
 
  expect(graph.breadthFirst("A")).toEqual(["A", "B"]);
 });

 it("depthFirst returns an empty array when the start vertex does not exist", () => {
  const graph = new Graph();
  
  expect(graph.depthFirst("A")).toEqual([]); 
 });
 
 it("depthFirst returns the start vertex when it has no neighbors", () => {
  const graph = new Graph();
  graph.addVertex("A");

  expect(graph.depthFirst("A")).toEqual(["A"]);
 });

 it("depthFirst visits the start vertex and its direct neighbor", () => {
  const graph = new Graph();
  graph.addEdge("A", "B");

  expect(graph.depthFirst("A")).toEqual(["A", "B"]); 
 });

 it("depthFirst explores as far as possible before backtracking", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");

  expect(graph.depthFirst("A")).toEqual(["A", "B", "D", "C", "E"]);
 });
 
 it("depthFirst handles cycles without visiting vertices twice", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "A");

  expect(graph.depthFirst("A")).toEqual(["A", "B", "C"]);
 });
 
 it("depthFirst only visits vertices connected to the start vertex", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("C", "D");

  expect(graph.depthFirst("A")).toEqual(["A", "B"]);
 });

 it("removeEdge removes the connection between two vertices in both directions", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  
  graph.removeEdge("A", "B");

  expect(graph.adjacencyList).toEqual({A:["C"], B:[], C:["A"]});
 });

 it("removeEdge does nothing if one or both vertices do not exist", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");

  graph.removeEdge("A", "C");
  graph.removeEdge("X", "Y");

  expect(graph.adjacencyList).toEqual({A:["B"], B:["A"]});
 });

 it("removeVertex removes a vertex and all edges connected to it", () => {
  const graph = new Graph();
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");

  graph.removeVertex("A");

  expect(graph.adjacencyList).toEqual({B:[], C:[]});
 });

it("removeVertex does nothing if the vertex does not exist", () => {
  const graph = new Graph();

  graph.addEdge("A", "B");
  graph.removeVertex("X");

  expect(graph.adjacencyList).toEqual({A:["B"], B:["A"]});
 });
});
