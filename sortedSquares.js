/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.
*/

/*
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

/*
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.


Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

/*
function sortedSquares(nums)
create new array
for each num in nums
square num
push to new array
sort new array
return new array
*/

/**
 * @param {number[]} nums
 * @return {number[]}
*/

var sortedSquares = function(nums) {
    let resArr = [];
    for (num of nums){
        num = num * num;
        resArr.push(num);
    }
    return resArr.sort((a,b) => a - b);
};

/*
var sortedSquares = function(nums) {
    let result = new Array(nums.length);
    let left = 0, right = nums.length - 1;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    
    return result;
};
*/

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));