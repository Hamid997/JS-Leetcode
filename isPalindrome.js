/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/*
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/*
Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/




/**
 * @param {string} s
 * @return {boolean}
 */


/*
function isPalindrome with s parameter
create str = ""
loop through s
    if char is letter or number
        add lowercase char to str
create left = 0
create right = str.length - 1
while left < right
    if str[left] != str[right]
        return false
    left increase
    right decrease
return true
*/


var isPalindrome = function (s) {

    // Step 1: Clean string - keep only alphanumeric and convert to lowercase
    let str = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            str += char;
        }
    }

    // Step 2: Two pointers
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;

};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
