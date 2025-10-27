/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.


Example 1:
Input: s = "aba"
Output: true.

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
 

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
*/


/**
 * @param {string} s
 * @return {boolean}
**/

/* First solution
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    function isPalindrome(str, i, j) {
        while (i < j) {
            if (str[i] !== str[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    while (left < right) {
        if (s[left] !== s[right]) {
            // try skipping one side
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
};
*/

/* Second solution */
function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // try skipping one character (either side)
            let skipLeft = true;
            let skipRight = true;

            // check if skipping left works
            let i = left + 1, j = right;
            while (i < j) {
                if (s[i] !== s[j]) {
                    skipLeft = false;
                    break;
                }
                i++;
                j--;
            }

            // check if skipping right works
            i = left;
            j = right - 1;
            while (i < j) {
                if (s[i] !== s[j]) {
                    skipRight = false;
                    break;
                }
                i++;
                j--;
            }

            return skipLeft || skipRight;
        }

        left++;
        right--;
    }

    return true;
}

// ✅ Tests
console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false

