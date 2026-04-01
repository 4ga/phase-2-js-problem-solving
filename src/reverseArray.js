export function reverseArray(items){
 const result = [];

 for(let i = items.length - 1; i >= 0; i--) {
  result.push(items[i]); 
 }
 return result;
}
