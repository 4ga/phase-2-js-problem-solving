export function isBalancedParentheses(text) {
 const stack = [];
 
 for(let i = 0; i < text.length; i++) {
  if(text[i] === "("){
   stack.push(text[i]);
  }
  if(text[i] === ")") {
   if(stack.length === 0){
    return false;
   }else{
    stack.pop();
   }
  }
 }
 return stack.length === 0;
}
