/*
Given a string s, reverse the string according to the following rules:
All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.


Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:
1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
*/


/**
 * @param {string} s
 * @return {string}
 */


var reverseOnlyLetters = function(s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Move left pointer if current char is not a letter
    if (!arr[left].match(/[a-zA-Z]/)) {
      left++;
      continue;
    }
    
    // Move right pointer if current char is not a letter
    if (!arr[right].match(/[a-zA-Z]/)) {
      right--;
      continue;
    }
    
    // Both are letters, swap them
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  result =  arr.join("");
  return result;
};



console.log(reverseOnlyLetters("ab-cd")); //  "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); //  "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); //  "Qedo1ct-eeLg=ntse-T!"
