/*
Given a string s and an array of strings words, determine whether s is a prefix string of words.
A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
Return true if s is a prefix string of words, or false otherwise.

 

Example 1:
Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
Output: true
Explanation:
s can be made by concatenating "i", "love", and "leetcode" together.

Example 2:
Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
Output: false
Explanation:
It is impossible to make s using a prefix of arr.
 

Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 20
1 <= s.length <= 1000
words[i] and s consist of only lowercase English letters.
*/


/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

var isPrefixString = function(s, words) {
    let i = 0;  // pointer for words array
    let j = 0;  // pointer for string s
    
    while (i < words.length) {
        const currentWord = words[i];
        const wordLength = currentWord.length;
        
        // Check if current word would go beyond s
        if (j + wordLength > s.length) {
            return false;
        }
        
        // Check if current word matches the portion of s
        if (s.substring(j, j + wordLength) !== currentWord) {
            return false;
        }
        
        // Move pointers forward
        j += wordLength;
        i++;
        
        // If we've matched all of s, we're done
        if (j === s.length) {
            return true;
        }
    }
    
    // Ran out of words before matching all of s
    return false;
};

console.log(isPrefixString("iloveleetcode", ["i", "love", "leetcode"])); // true
console.log(isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"])); // false
