export class LinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.size = 0;
 }

 append(value) {
  const newNode = {
   value, 
   next: null,
  };
 
  if(this.head === null){
   this.head = newNode;
   this.tail = newNode;
  }else{
   this.tail.next = newNode;
   this.tail = newNode;
  }
  this.size += 1;
  }

 prepend(value) {
  const newNode = {
   value,
   next: this.head,
  }
  if(this.head === null) {
   this.head = newNode;
   this.tail = newNode;
  }else {
   this.head = newNode
  }
  this.size += 1;
 }
 
 contains(value){
  let current = this.head
  while(current !== null){
   if(current.value === value){
    return true;
   }
   current = current.next;
  }
 return false;
 }

 removeHead(){
  if(this.head === null){
   return undefined;
  }
 
  const removedValue = this.head.value;
  this.head = this.head.next;
  this.size -= 1;

  if(this.head === null){
   this.tail = null;
  }
  return removedValue;
 }

 removeTail() {
  if(this.tail === null) {
   return undefined;
  }

 if(this.head === this.tail) {
  const removedValue = this.tail.value;
  this.head = null;
  this.tail = null;
  this.size = 0;
  return removedValue; 
 }
  let previous = this.head;
  let current = this.head.next;
  
  while(current.next !== null){
   previous = current;
   current = current.next;
  }
  const removedValue = current.value;
  previous.next = null;
  this.tail = previous;
  this.size -= 1;

  return removedValue;
 } 
}


