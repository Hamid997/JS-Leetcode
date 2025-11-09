/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
 

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:
n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/

/* TWO POINTERS */
var sortColors = function(nums) {
    let left = 0;
    let right = 0;
    
    // First pass: move all 0s to the front
    while (right < nums.length) {
        if (nums[right] === 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    
    // Second pass: move all 1s after the 0s
    right = left; // start from where 0s ended
    while (right < nums.length) {
        if (nums[right] === 1) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    // 2s are automatically in the correct position at the end
};


/* Three-pointer approach 
var sortColors = function(nums) {
    let left = 0;      // pointer for 0s (red)
    let curr = 0;      // current element being examined
    let right = nums.length - 1;  // pointer for 2s (blue)
    
    // Continue while current hasn't passed the right pointer
    while (curr <= right) {
        if (nums[curr] === 0) {
            // Found a 0, swap with left pointer
            [nums[left], nums[curr]] = [nums[curr], nums[left]];
            left++;
            curr++;
        } else if (nums[curr] === 2) {
            // Found a 2, swap with right pointer
            [nums[right], nums[curr]] = [nums[curr], nums[right]];
            right--;
            // Don't increment curr - need to examine swapped element
        } else {
            // Found a 1, it's in the right place
            curr++;
        }
    }
};
*/

// Test cases
console.log("Example 1:");
let nums1 = [2,0,2,1,1,0];
sortColors(nums1);
console.log(nums1); // [0,0,1,1,2,2]

console.log("\nExample 2:");
let nums2 = [2,0,1];
sortColors(nums2);
console.log(nums2); // [0,1,2]

console.log("\nAdditional test cases:");
let nums3 = [2,2,2,0,0,0,1,1];
sortColors(nums3);
console.log(nums3); // [0,0,0,1,1,2,2,2]

let nums4 = [1];
sortColors(nums4);
console.log(nums4); // [1]

let nums5 = [2,1,0];
sortColors(nums5);
console.log(nums5); // [0,1,2]