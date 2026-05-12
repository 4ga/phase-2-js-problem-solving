class PriorityQueue {
  constructor() {
    this.values = [];
  }
  peek() {
   return this.values[0];
  }
  dequeue() {
   if(this.values.length <= 0){
    return undefined;
   }
   if(this.values.length === 1) {
    return this.values.pop();
   }

   const highestPriority = this.values[0];
   const last = this.values.pop();

   this.values[0] = last;
   this.sinkDown();

   return highestPriority;
  }

  sinkDown() {
   let index = 0;
   const length = this.values.length;
  
   while(true){ 
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let highestPriorityIndex = index;

    if(leftChildIndex < length && this.values[leftChildIndex].priority < this.values[highestPriorityIndex].priority){
     highestPriorityIndex = leftChildIndex;
    }
    if(rightChildIndex < length && this.values[rightChildIndex].priority < this.values[highestPriorityIndex].priority) {
     highestPriorityIndex = rightChildIndex;
    }

    if(highestPriorityIndex === index){
     break;
    }
    const temp = this.values[index];
    this.values[index] = this.values[highestPriorityIndex];
    this.values[highestPriorityIndex] = temp;

    index = highestPriorityIndex;
   }
  }

  enqueue(value, priority) {
   this.values.push({value, priority});
   this.bubbleUp();
  }
  bubbleUp() {
  let index = this.values.length - 1;

  while(index > 0){
   const parentIndex = Math.floor((index - 1) / 2);
   const currentItem = this.values[index];
   const parentItem = this.values[parentIndex];

   if(parentItem.priority <= currentItem.priority) {
    break;
   }
   this.values[parentIndex] = currentItem;
   this.values[index] = parentItem;

   index = parentIndex;
  }
 }
}

export default PriorityQueue;

