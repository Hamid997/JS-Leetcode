
/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/*
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

/*
Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

/* linear search:
function serach(nums, target):
for loop in nums array
if nums index is equal to target
return index
return -1
*/
/*
var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
};
*/


/* binary search:
FUNCTION search(nums, target):
    left = 0
    right = nums.length - 1
    
    WHILE left <= right:
        middle = (left + right) / 2
        
        IF nums[middle] == target:
            RETURN middle
        
        IF nums[middle] < target:
            left = middle + 1
        ELSE:
            right = middle - 1
    
    RETURN -1
*/

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        
        if (nums[middle] == target) {
            return middle;
        }
        
        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    return -1;
}

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));

