export function countEvenNumbers(numbers){
 let count = 0;
  for(const num of numbers) {
   if(num % 2 === 0) count++;
  }
 return count;
}
