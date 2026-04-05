export function binarySearchRecursive(sortedNumbers, target, left=0, right=sortedNumbers.length-1) {
 if(left > right) {
  return -1; 
 }
 const middle = left + Math.floor((right - left) / 2);
 if(sortedNumbers[middle] === target){
  return middle;
 }
 if(sortedNumbers[middle] < target){
  return binarySearchRecursive(sortedNumbers, target, middle + 1, right);
 }
  return binarySearchRecursive(sortedNumbers, target, left, middle - 1);
}
