/*
You are given a 0-indexed integer array nums and a target element target.
A target index is an index i such that nums[i] == target.
Return a list of the target indices of nums after sorting nums in non-decreasing order. 
If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
 

Example 1:
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
Example 2:
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
Example 3:
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
 

Constraints:
1 <= nums.length <= 100
1 <= nums[i], target <= 100
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Simple way 
var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i);
        }
    }
    
    return result;
};
*/

/* Binary Search way*/
var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    // Find first occurrence
    let left = 0, right = nums.length - 1;
    let first = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            first = mid;
            right = mid - 1; // Keep searching left
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    if (first === -1) return []; // Target not found
    
    // Find last occurrence
    left = 0;
    right = nums.length - 1;
    let last = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            last = mid;
            left = mid + 1; // Keep searching right
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Build result array from first to last
    let result = [];
    for (let i = first; i <= last; i++) {
        result.push(i);
    }
    
    return result;
};



console.log(targetIndices([1,2,5,2,3], 2)); // [1,2]
console.log(targetIndices([1,2,5,2,3], 3)); // [3]
console.log(targetIndices([1,2,5,2,3], 5)); // [4]


