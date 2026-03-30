export function hasDuplicates(items) {
 const seen = {};
 
 for(const item of items) {
  if(seen[item]){
    return true;
  }
    seen[item] = true;
 }
 return false;
}
