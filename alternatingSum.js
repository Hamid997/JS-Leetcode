/*
You are given an integer array nums.
The alternating sum of nums is the value obtained by adding elements at even indices and subtracting elements at odd indices. 
That is, nums[0] - nums[1] + nums[2] - nums[3]...
Return an integer denoting the alternating sum of nums.


Example 1:
Input: nums = [1,3,5,7]
Output: -4
Explanation:
Elements at even indices are nums[0] = 1 and nums[2] = 5 because 0 and 2 are even numbers.
Elements at odd indices are nums[1] = 3 and nums[3] = 7 because 1 and 3 are odd numbers.
The alternating sum is nums[0] - nums[1] + nums[2] - nums[3] = 1 - 3 + 5 - 7 = -4.

Example 2:
Input: nums = [100]
Output: 100
Explanation:
The only element at even indices is nums[0] = 100 because 0 is an even number.
There are no elements on odd indices.
The alternating sum is nums[0] = 100.
 

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {number}
**/

/*
var alternatingSum = function(nums) {

    // Function to sum elements at even indices
    function evenSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i += 2) {
            sum += arr[i];
        }
        return sum;
    }

    // Function to sum elements at odd indices
    function oddSum(arr) {
        let sum = 0;
        for (let i = 1; i < arr.length; i += 2) {
            sum += arr[i];
        }
        return sum;
    }

    // main alternating sum
    let sum = evenSum(nums) - oddSum(nums);
    return sum;
};
*/

var alternatingSum = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            sum += nums[i]; // even index → add
        } else {
            sum -= nums[i]; // odd index → subtract
        }
    }
    return sum;
};


console.log(alternatingSum([1,3,5,7])); // -4
console.log(alternatingSum([100]));     // 100