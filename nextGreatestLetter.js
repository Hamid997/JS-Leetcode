/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. 
There are at least two different characters in letters.
Return the smallest character in letters that is lexicographically greater than target. 
If such a character does not exist, return the first character in letters.
 

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:
2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.
*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
**/

var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    
    // If target is greater than or equal to the last letter, wrap around
    if (target >= letters[right]) {
        return letters[0];
    }
    
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        
        // We're looking for the smallest character GREATER than target
        // So we need to move right when letters[middle] <= target
        if (letters[middle] <= target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    // At the end, left will point to the smallest character greater than target
    return letters[left];
};


console.log(nextGreatestLetter(["c","f","j"], "a"));     // c
console.log(nextGreatestLetter(["c","f","j"], "c"));     // f
console.log(nextGreatestLetter(["x","x","y","y"], "z")); // x

