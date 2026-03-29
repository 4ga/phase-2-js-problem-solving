export function getPositiveNumbers(numbers) {
 const pos = [];

 for(const num of numbers){
  if(num > 0){
   pos.push(num);
  }
 }
 return pos;
}
