export function sumArrayRecursive(numbers) {

 if(numbers.length === 0) {
  return 0;
 }

 return numbers[0] + sumArrayRecursive(numbers.slice(1)); 
}
