/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/


/*
Function reverseWords with s parameter
    words = split s into array of words (split(' '))

    FOR i from 0 to words.length - 1:
        chars = split words[i] into array of characters (split(''))
        
        left = 0
        right = chars.length - 1
        
        WHILE left < right:
            swap chars[left] and chars[right]
            left++
            right--
        
        words[i] = join chars back to string (join(''))
    
    result = join words array with spaces (join(' '))
    return result
*/

/**
 * @param {string} s
 * @return {string}
 */

function reverseWords(s) {
    // Split string into array of words
    let words = s.split(' ');
    
    // Process each word
    for (let i = 0; i < words.length; i++) {
        // Split word into array of characters
        let chars = words[i].split('');
        
        // Two pointers approach
        let left = 0;
        let right = chars.length - 1;
        
        // Swap characters from both ends moving toward center
        while (left < right) {
            // Swap
            let temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            
            // Move pointers
            left++;
            right--;
        }
        
        // Join characters back to string and replace in words array
        words[i] = chars.join('');
    }
    
    // Join all words back with spaces
    result = words.join(' ');

    return result;

}


console.log(reverseWords("Let's take LeetCode contest")); //"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Mr Ding")); //"rM gniD"