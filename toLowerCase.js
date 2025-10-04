/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
*/

/*
Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"
*/

/*
Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.
*/


/**
 * @param {string} s
 * @return {string}
**/
/*
function tolowercase parameter s
create result var = ""
for each character in string s:
    get ASCII code of character
    if ASCII is between 65 and 90 (uppercase):
        add (ASCII + 32) to result  // convert to lowercase
    else:
        add character as-is to result  // already lowercase or not a letter
return result
*/

var toLowerCase = function (s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += s[i];
        }
    }

    return result;
};

console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));