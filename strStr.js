/*
Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.
*/
 
/*
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.


Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

/*
Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/


/*
/*
Function strStr(haystack, needle):

    if needle is empty:
        return 0

    for i from 0 to (length of haystack - length of needle):
        j = 0

        // compare characters one by one
        while j < length of needle AND haystack[i + j] == needle[j]:
            j = j + 1

        // if all characters matched
        if j == length of needle:
            return i

    return -1
*/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }

    return -1;
};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
