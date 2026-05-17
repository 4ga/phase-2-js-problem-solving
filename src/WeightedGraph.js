class WeightedGraph {
 constructor() {
  this.adjacencyList = {};
 }
 addVertex(vertex) {
  if(!this.adjacencyList[vertex]){
   this.adjacencyList[vertex] = [];
  }
 }
 addEdge(vertex1, vertex2, weight){
  this.addVertex(vertex1);
  this.addVertex(vertex2);

  const vertex1HasEdge = this.adjacencyList[vertex1].some(
  (neighbor) => neighbor.vertex === vertex2 );

  const vertex2HasEdge = this.adjacencyList[vertex2].some(
  (neighbor) => neighbor.vertex === vertex1 );

  if(!vertex1HasEdge){
   this.adjacencyList[vertex1].push({vertex: vertex2, weight });
  }

  if(!vertex2HasEdge) {
   this.adjacencyList[vertex2].push({vertex: vertex1, weight });
  }
 }
}

export default WeightedGraph;
