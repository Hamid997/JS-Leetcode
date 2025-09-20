/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
*/
 
/*
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/


/*
Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/


/**
 * @param {string} s
 * @return {number}
 */

/*
function lengthOfLastWord(s)
create a right variable and set it to s.length - 1
create a count variable and set it to 0
while right is greater than or equal to 0 and s[right] is a space
    decrement right
while right is greater than or equal to 0 and s[right] is not a space
    increment count
    decrement right
return count
*/

var lengthOfLastWord = function(s) {
    let right = s.length - 1;
    let count = 0;

    while (right >= 0 && s[right] === ' ') {
        right--;
    }
    
    while (right >= 0 && s[right] !== ' ') {
        count++;
        right--;
    }
    
    return count;
};


console.log(lengthOfLastWord("Hello World")); //5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
console.log(lengthOfLastWord("luffy is still joyboy")); //6