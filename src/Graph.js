class Graph {
 constructor() {
  this.adjacencyList = {};
 }
 addVertex(vertex) {
  if(!this.adjacencyList[vertex]){
   this.adjacencyList[vertex] = [];
  }
 }

 hasPath(source, target){
  if(!this.adjacencyList[source] || !this.adjacencyList[target]){
   return false;
  }
  if(source === target){
   return true;
  }
  const queue = [source];
  const visited = new Set();

  let index = 0; 
  
  while(index < queue.length){
   const currentVertex = queue[index];
   index++;
   
   for(const neighbor of this.adjacencyList[currentVertex]) {
     if(neighbor === target) {
      return true;
    }
    if(!visited.has(neighbor)){
      visited.add(neighbor);
      queue.push(neighbor);
    }
   }
  } 
  return false;
 }

 removeVertex(vertex) {
  if(!this.adjacencyList[vertex]){
   return;
  }
  for(const neighbor of this.adjacencyList[vertex]){
   this.removeEdge(vertex, neighbor);
  }
  delete this.adjacencyList[vertex];
 }

 removeEdge(vertex1, vertex2){
  if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
   return;
  }
  this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(neighbor => neighbor !== vertex2);
  this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(neighbor => neighbor !== vertex1);
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

 depthFirst(vertex){
  if(!this.adjacencyList[vertex]){
   return [];
  }
  const result = [];
  const visited = new Set();

  const visit = (startVertex) => {
   visited.add(startVertex);
   result.push(startVertex);
   
   for(const neighbor of this.adjacencyList[startVertex]){
    if(!visited.has(neighbor)){
     visit(neighbor);
    }
   }
  }
  visit(vertex);
  return result;
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

