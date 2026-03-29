export function getLargestNumber(numbers){
 let largestNumber = numbers[0];
 
 for(const num of numbers) {
  if(num > largestNumber){
   largestNumber = num;
  }
 }
 return largestNumber;
}
