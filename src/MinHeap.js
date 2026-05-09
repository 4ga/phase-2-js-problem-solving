class MinHeap {
 constructor() {
  this.values = [];
 }
 extractMin() {
  if(this.values.length === 0) {
   return undefined;
  }
  if(this.values.length === 1) {
   return this.values.pop();
  }
  const min = this.values[0];
  const last = this.values.pop();

  this.values[0] = last;
  this.sinkDown();

  return min;
 }

 sinkDown() {
  let index = 0;
  const length = this.values.length;

  while(true) {
   const leftChildIndex = 2 * index + 1;
   const rightChildIndex = 2 * index + 2;
   let smallestIndex = index;

   if(leftChildIndex < length && this.values[leftChildIndex] < this.values[smallestIndex]){
    smallestIndex = leftChildIndex;
   }
   
   if(rightChildIndex < length && this.values[rightChildIndex] < this.values[smallestIndex]){
    smallestIndex = rightChildIndex;
   }
   
   if(smallestIndex === index) {
    break;
   }
  
   const temp = this.values[index];
   this.values[index] = this.values[smallestIndex];
   this.values[smallestIndex] = temp;

   index = smallestIndex;
  }
 }

 peek() {
  return this.values[0];
 }
 insert(value) {
  this.values.push(value);
  this.bubbleUp();
 }
 bubbleUp(){
  let index = this.values.length - 1;
  
  while(index > 0){
   const parentIndex = Math.floor((index - 1) / 2);
   const currentValue = this.values[index];
   const parentValue = this.values[parentIndex];

   if(parentValue <= currentValue) {
    break;
   }
   this.values[parentIndex] = currentValue;
   this.values[index] = parentValue;

   index = parentIndex;
  }
 }
}

export default MinHeap;
