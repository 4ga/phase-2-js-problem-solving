export function firstUniqueChar(text) {
 const counts = {};

 for(const char of text) {
  if(counts[char] >= 1) {
    counts[char]++;
  }else {
    counts[char] = 1;
  }
 }

 for(const char of text){
  if(counts[char] === 1){
    return char;
  }
 }
 return null;
}
