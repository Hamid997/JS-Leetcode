/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 
Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/



/**
 * @param {string} s
 * @return {string}
**/

var reverseVowels = function(s) {
    // Helper function to check if character is a vowel
    const isVowel = (char) => {
        return 'aeiouAEIOU'.includes(char);
    };
    
    // Convert to array for easy swapping
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Move left pointer if not a vowel
        if (!isVowel(arr[left])) {
            left++;
            continue;
        }
        
        // Move right pointer if not a vowel
        if (!isVowel(arr[right])) {
            right--;
            continue;
        }
        
        // Both are vowels - swap them
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    result = arr.join('');
    return result;
};

console.log(reverseVowels("IceCreAm")); // "AceCreIm"
console.log(reverseVowels("leetcode")); // "leotcede"


