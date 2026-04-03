export function findLongestWord(sentence){
 const words = sentence.split(" ");
 let longest = words[0];

 if(sentence === "") {
 return "";
 }
 
 for(let i = 1; i < words.length; i++){
  if(words[i].trim().length > longest.length) {
    longest = words[i].trim();
  }
 }
 return longest;
}
