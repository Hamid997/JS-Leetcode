/*
Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
Substrings that occur multiple times are counted the number of times they occur.

 

Example 1:
Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

Example 2:
Input: s = "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
 

Constraints:
1 <= s.length <= 105
s[i] is either '0' or '1'.
*/



/**
 * @param {string} s
 * @return {number}
**/

/*
function countBinarySubstrings with s parameter
let groups = new array  // store length of each consecutive group
let i = 0  // pointer to traverse string

// Step 1: Build groups array
while i < s.length:
    let count = 1  // count current group length
    let j = i + 1  // second pointer
    
    while j < s.length AND s[i] == s[j]:
        count++
        j++
    
    groups.push(count)  // add group length
    i = j  // move i to next different character

// Step 2: Count valid substrings between adjacent groups
let result = 0
let i = 0  // pointer for first group
let j = 1  // pointer for second group

while j < groups.length:
    result += min(groups[i], groups[j])  // add valid substrings
    i++
    j++

return result
*/

var countBinarySubstrings = function(s) {
    let groups = [];
    let i = 0;
    
    while (i < s.length) {
        let count = 1;
        let j = i + 1;
        
        while (j < s.length && s[i] === s[j]) {
            count++;
            j++;
        }
        
        groups.push(count);
        i = j;
    }
    
   
    let result = 0;
    let i2 = 0;
    let j2 = 1;
    
    while (j2 < groups.length) {
        result += Math.min(groups[i2], groups[j2]);
        i2++;
        j2++;
    }
    
    return result;

};


console.log(countBinarySubstrings("00110011")); // 6
console.log(countBinarySubstrings("10101")); // 4 
