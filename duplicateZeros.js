/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.


Example 1:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 9
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

function duplicateZeros(arr) {
    // Step 1: Count how many zeros are in the array
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeros++;
    }
    
    // Step 2: Go backwards with two pointers
    let i = arr.length - 1;        // read pointer (start at last element)
    let j = arr.length - 1 + zeros; // write pointer (imaginary position)
    
    while (i >= 0) {
        // Copy element from i to j (if j is in bounds)
        if (j < arr.length) {
            arr[j] = arr[i];
        }
        
        // If element is zero, duplicate it
        if (arr[i] === 0) {
            j--;
            if (j < arr.length) {
                arr[j] = 0;
            }
        }
        
        // Move both pointers left
        i--;
        j--;
    }
    return arr;
}


console.log(duplicateZeros([1,0,2,3,0,4,5,0])); //
console.log(duplicateZeros([1,2,3])); //