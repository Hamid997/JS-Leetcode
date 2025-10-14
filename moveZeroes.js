/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
function moveZeroes with nums parameter
initialize left pointer = 0
for loop on right pointer from 0 to nums.length
  if nums[right] is not equal to 0
    if left is not equal to right
      swap nums[left] with nums[right]
    increment left by 1
return nums
*/
var moveZeroes = function(nums) {
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            if (left !== right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
            }
            left++;
        }
    }
    
    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0]));          // [0]
