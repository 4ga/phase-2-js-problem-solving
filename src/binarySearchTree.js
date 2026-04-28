export class BinarySearchTree {
 constructor() {
  this.root = null;
  this.size = 0;
 }

 contains(value) {
  let current = this.root;

  while(current !== null){
   if(value === current.value){
     return true;
   }else if(value < current.value){
    current = current.left;
   }else{
     current = current.right;
   }
  }
  return false;
 }

 postOrder() {
  const results = [];
  
  function traverse(node){
   if(node === null) {
    return; 
   }
   traverse(node.left);
   traverse(node.right);
   results.push(node.value);
  }
  traverse(this.root);
  return results;
 }

 preOrder() {
  const results = [];

  function traverse(node){
   if(node === null){
    return;
   }
   results.push(node.value);
   traverse(node.left);
   traverse(node.right);
  }
  traverse(this.root);
  return results;
 }
 
 inOrder() {
  const results = [];

  function traverse(node){
   if(node === null) {
    return;
   }
  
   traverse(node.left);
   results.push(node.value);
   traverse(node.right);
  }

  traverse(this.root);

  return results;
 }
 

 findMax() {
  if(this.root === null){
   return undefined;
  }
  let current = this.root;

  while(current.right !== null){
    current = current.right;
  }
  return current.value;
 }

 findMin() {
  if(this.root === null){
   return undefined;
  }

  let current = this.root;

  while(current.left !== null){
   current = current.left;
  }
  return current.value;
 }

 insert(value){
  const newNode = {
   value, 
   left: null, 
   right: null
  }
 
  if(this.root === null) {
   this.root = newNode;
   this.size += 1;
   return;
  }

  let current = this.root;
  
  while(true){
   if(value < current.value){
    if(current.left === null) {
     current.left = newNode;
     this.size += 1;
     return;
    }
   
      current = current.left;
    } else if (value > current.value){
      if (current.right === null) {
         current.right = newNode;
         this.size += 1; 
         return;
       }

      current = current.right;
     }else{
      return;
     }
    }
  }
}
