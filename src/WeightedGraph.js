import PriorityQueue from "./PriorityQueue.js";

class WeightedGraph {
 constructor() {
  this.adjacencyList = {};
 }
 addVertex(vertex) {
  if(!this.adjacencyList[vertex]){
   this.adjacencyList[vertex] = [];
  }
 }
 dijkstra(source, target) {
  if(!this.adjacencyList[source] || !this.adjacencyList[target]){
   return [];
  }

  if(source === target){ 
   return [source]
  }
 
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  for(const vertex in this.adjacencyList){
   distances[vertex] = Infinity;
   previous[vertex] = null;
  }

  distances[source] = 0;
  queue.enqueue(source, 0);

  while(queue.values.length > 0) {
   const currentItem = queue.dequeue();
   const currentVertex = currentItem.value;
   const currentDistance = currentItem.priority;

   if(currentDistance > distances[currentVertex]) {
    continue;
   }

   if(currentVertex === target) {
    const path = [];
    let current = target;

    while(current !== null){
     path.push(current);
     current = previous[current];
    }

    return path.reverse();
   }

   for(const neighbor of this.adjacencyList[currentVertex]){
    const candidateDistance = distances[currentVertex] + neighbor.weight;

    if(candidateDistance < distances[neighbor.vertex]){
     distances[neighbor.vertex] = candidateDistance;
     previous[neighbor.vertex] = currentVertex;
     queue.enqueue(neighbor.vertex, candidateDistance);
    }
   }
  }

  return [];
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
