export function mergeSortedArrays(left, right) {
 const result = [];
 let i = 0, j = 0;

 while(i < left.length && j < right.length) {
  if(left[i] <= right[j]) {
   result.push(left[i]);
   i++;
  }else{
    result.push(right[j]);
    j++;
  }
 }
 
 while(i < left.length) {
  result.push(left[i]);
  i++;
 }

 while(j < right.length) {
  result.push(right[j]);
  j++;
 }

 return result;
}
