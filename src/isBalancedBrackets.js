export function isBalancedBrackets(text){
 const stack = [];
 const pairs = {")":"(", "]":"[", "}":"{"};

 for(let i = 0; i < text.length; i++) {
  let char = text[i];
  if(char === "(" || char === "[" || char === "{") {
   stack.push(char);
  }else{
   if(stack.length === 0){
    return false;
   }
   const c = stack.pop();
   if(c !== pairs[char]){
    return false; 
   }
  }
 }
 return stack.length === 0;
}
