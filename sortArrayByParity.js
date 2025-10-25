/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.
 

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]
 

Constraints:
1 <= nums.length <= 5000
0 <= nums[i] <= 5000
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        // If left is even, it's in the right place, move forward
        if (nums[left] % 2 === 0) {
            left++;
        }
        // If right is odd, it's in the right place, move backward
        else if (nums[right] % 2 === 1) {
            right--;
        }
        // Left is odd AND right is even, swap them!
        else {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    
    return nums;
};

console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1]
console.log(sortArrayByParity([0]));       // [0]
