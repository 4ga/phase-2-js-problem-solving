export function areAnagrams(first, second) {
 const counts = {}; 

 if(first.length !== second.length) {
  return false;
 }

 for(const char of first) {
  if(counts[char]) {
   counts[char]++;
  }else{
   counts[char] = 1;
  }
 }

 for(const char of second) {
  if(!counts[char]) {
   return false;
  }
   counts[char]--;
 }
 return true;
}
