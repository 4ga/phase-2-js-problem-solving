import {mergeSortedArrays} from "../src/mergeSortedArrays.js";

export function mergeSort(numbers){
 if(numbers.length <= 1){
  return numbers;
 }
 const middle = Math.floor(numbers.length / 2);
 const left = numbers.slice(0, middle);
 const right = numbers.slice(middle);

 const sortedLeft = mergeSort(left);
 const sortedRight = mergeSort(right);

 return mergeSortedArrays(sortedLeft, sortedRight);
}

