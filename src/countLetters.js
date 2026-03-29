export function countLetters(str) {
 let chars = {};
 
 for(const char of str) {
  if(chars[char]) {
   chars[char]++;
  }else{
   chars[char] = 1;
  }
 } 
 return chars;
}
