/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 

Example 1:
Input: x = 123
Output: 321
Example 2:
Input: x = -123
Output: -321
Example 3:
Input: x = 120
Output: 21
 

Constraints:
-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
**/

var reverse = function(x) {
    let xStr = Math.abs(x).toString();
    let xArr = xStr.split('');
    
    let left = 0;
    let right = xArr.length - 1;

    while (left < right){
        [xArr[left], xArr[right]] = [xArr[right], xArr[left]];
        left++;
        right--;
    }

    let result = parseInt(xArr.join('')) * Math.sign(x);
    
    // CHECK: 32-bit integer range
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    
    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    }
    
    return result;
};

console.log(reverse(123));   // 321
console.log(reverse(-123));  // -321
console.log(reverse(120));   // 21
console.log(reverse(1534236469)); // 0 (overflow)
