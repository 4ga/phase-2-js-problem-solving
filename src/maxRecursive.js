export function maxRecursive(numbers) {
 if(numbers.length === 1) {
  return numbers[0];
 }
 const restMax = maxRecursive(numbers.slice(1));
 return numbers[0] > restMax ? numbers[0] : restMax; 
}
