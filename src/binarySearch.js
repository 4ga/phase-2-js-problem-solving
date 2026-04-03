export function binarySearch(sortedNumbers, target) {
 let low = 0, high = sortedNumbers.length - 1, mid=0;


 while(low <= high) {
  mid = low + Math.floor((high - low) / 2);
  if(sortedNumbers[mid] < target){
   low = mid + 1;
  }else if(sortedNumbers[mid] > target){
   high = mid - 1;
  }else {
   return mid;
  }
 }
 return -1;
}
