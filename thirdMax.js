/*
Given an integer array nums, return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.


Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
 

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/


/**
 * @param {number[]} nums
 * @return {number}
 */

 function thirdMax(nums) {
    // If length < 3, return max
    if (nums.length < 3) {
        return Math.max(...nums);
    }
    
    // Get distinct numbers and sort in descending order
    const distinct = [...new Set(nums)].sort((a, b) => b - a);
    
    // If we have at least 3 distinct numbers, return the third
    if (distinct.length >= 3) {
        return distinct[2];
    } else {
        // Otherwise return the maximum
        return distinct[0];
    }
}

console.log(thirdMax([3, 2, 1]));      //  1 (third max)
console.log(thirdMax([1, 2]));         //  2 (max, since length < 3)
console.log(thirdMax([2, 2, 3, 1]));   //  1 (third distinct max)