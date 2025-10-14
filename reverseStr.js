/*
Given a string s and an integer k, 
reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters, 
then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*
Function reverseStr(s, k):
    arr = convert s to array
    
    for i from 0 to arr.length, step by 2k:
        remaining = arr.length - i
        
        if remaining < k:
            end = arr.length
        else:
            end = i + k
        
        left = i
        right = end - 1
        
        while left < right:
            swap arr[left] and arr[right]
            left++
            right--
    
    return arr as string
*/

var reverseStr = function (s, k) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let remaining = arr.length - i;
    let end;

    if (remaining < k) {
      end = arr.length;
    } else {
      end = i + k;
    }

    let left = i;
    let right = end - 1;
    
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};

console.log(reverseStr("abcdefg", 2)); // "bacdfeg"
console.log(reverseStr("abcd", 2)); // "bacd"
