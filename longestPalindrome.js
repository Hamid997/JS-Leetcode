/*
Given a string s, return the longest palindromic substring in s.

 
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
**/

/* Brute Force 
var longestPalindrome = function(s) {
    let res = '';
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let sub = s.slice(i, j + 1);
            if (sub === sub.split('').reverse().join('') && sub.length > res.length) {
                res = sub;
            }
        }
    }
    
    return res;
};
*/

/* Dynamic Programming 
var longestPalindrome = function(s) {
    const n = s.length;
    if (n < 2) return s;

    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0, maxLen = 1;

    // Every single character is a palindrome
    for (let i = 0; i < n; i++) dp[i][i] = true;

    // Fill the DP table
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;

            if (s[i] === s[j]) {
                if (len === 2 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;

                    if (len > maxLen) {
                        start = i;
                        maxLen = len;
                    }
                }
            }
        }
    }

    return s.substring(start, start + maxLen);
};
*/

/* Expand Around Center */
var longestPalindrome = function(s) {
    if (!s || s.length < 2) return s;
    let start = 0, maxLen = 0;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return [l + 1, r - 1];
    };

    for (let i = 0; i < s.length; i++) {
        const [l1, r1] = expand(i, i);       // طول فردي
        const [l2, r2] = expand(i, i + 1);   // طول زوجي

        if (r1 - l1 > maxLen) [start, maxLen] = [l1, r1 - l1];
        if (r2 - l2 > maxLen) [start, maxLen] = [l2, r2 - l2];
    }

    return s.substring(start, start + maxLen + 1);
};


console.log(longestPalindrome("babad")); //  "bab" "aba"
console.log(longestPalindrome("cbbd")); //  "bb"