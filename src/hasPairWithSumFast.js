export function hasPairWithSumFast(numbers, target){
 const seen = {};

 for(const num of numbers) {
  const needed = target - num;

  if(seen[needed]) {
   return true;
  }

  seen[num] = true;

 }

 return false;
}
