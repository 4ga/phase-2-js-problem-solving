export function removeDuplicates(items) {
 const seen = {};
 const result = [];

 for(const item of items) {
  if(!seen[item]) {
   result.push(item);
   seen[item] = true;
  }
 }
 return result;
}


