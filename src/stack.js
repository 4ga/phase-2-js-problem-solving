export class Stack {
 constructor() {
  this.items = [];
 }

 isEmpty() {
  return this.items.length === 0;
 }

 size() {
  return this.items.length;
 }
 
 push(value) {
  this.items.push(value);
 }
 
 peek() {
  return this.items[this.items.length - 1];
 }

 pop() {
  return this.items.pop();
 }

}
