export function isPalindrome(text) {
 for(let left = 0, right = text.length-1; left < right; left++, right--) {
  if(text[left] !== text[right]) {
    return false;
  }
 }
 return true;
}
