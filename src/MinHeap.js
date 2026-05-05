class MinHeap {
 constructor() {
  this.values = [];
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
