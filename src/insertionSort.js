export function insertionSort(numbers) {
 const arr = [...numbers];
 let i = 1;
 while(i < arr.length){
  let j = i;
  while(j > 0 && arr[j-1] > arr[j]) {
   let temp = arr[j]
   arr[j] = arr[j-1];
   arr[j-1] = temp;
   j--;
  }
  i++;
 }
 return arr;
}
