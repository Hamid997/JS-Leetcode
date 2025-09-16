/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/
 
/*
Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/*
Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
*/

function romanValue(R) {
    if (R === 'I') 
        return 1;
    if (R === 'V') 
        return 5;
    if (R === 'X') 
        return 10;
    if (R === 'L') 
        return 50;
    if (R === 'C') 
        return 100;
    if (R === 'D') 
        return 500;
    if (R === 'M') 
        return 1000;
    return -1;
}

var romanToInt = function(s) {
    let number = 0;
    for (let i = 0; i < s.length; i++){
        let st1 = romanValue(s[i]); 
        if(i + 1 < s.length){
            let st2 = romanValue(s[i+1]); 
            if(st1 >= st2){
                number = number + st1;
            }else{
                number = number + (st2 - st1);
                i++;
            }
        }else{
            number = number + st1;
        }
    }

    return number
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));