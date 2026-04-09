export class Queue{
 constructor(){
  this.items = [];
 }

 isEmpty() {
  return this.items.length === 0;
 }
 
 size() {
  return this.items.length;
 }

 enqueue(value) {
  this.items.push(value);
 }

 peek() {
  return this.items[0];
 }
 
 dequeue() {
  return this.items.shift();
 }
}
