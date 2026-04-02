export function countWords(sentence){
 if(sentence.trim().length === 0) {
  return 0;
 }
 return sentence.trim().split(" ").length; 
}
