class Graph {
 constructor() {
  this.adjacencyList = {};
 }
 addVertex(vertex) {
  if(!this.adjacencyList[vertex]){
   this.adjacencyList[vertex] = [];
  }
 }
 addEdge(vertex1, vertex2) {
  this.addVertex(vertex1);
  this.addVertex(vertex2);

  if(!this.adjacencyList[vertex1].includes(vertex2)) {
   this.adjacencyList[vertex1].push(vertex2);
  }
  
  if(!this.adjacencyList[vertex2].includes(vertex1)){
   this.adjacencyList[vertex2].push(vertex1);
  }
 }
 breadthFirst(vertex){
  if(!this.adjacencyList[vertex]){
   return [];
  }
  const result = [];
  const queue = [vertex];
  const visited = new Set();

  visited.add(vertex);

  let index = 0; 

  while(index < queue.length) {
   const currentVertex = queue[index];
   index++;

   result.push(currentVertex);
   
   for(const neighbor of this.adjacencyList[currentVertex]){
    if(!visited.has(neighbor)) {
     visited.add(neighbor);
     queue.push(neighbor);
    } 
   }
  }
  return result;
 }
}

export default Graph;

