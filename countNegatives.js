/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
return the number of negative numbers in grid.

 

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function(grid) {
    let negNumbers = 0;
    for (let i = 0; i < grid.length; i++) { 
        for (let j = 0; j < grid[i].length; j++) { 
            if(grid[i][j] < 0) {
                negNumbers++;
            }
        }
    }
    return negNumbers;
};


/* BINARY SEARCH
var countNegatives = function(grid) {
    let negNumbers = 0;
    const n = grid[0].length;
    
    for (let row of grid) {
        // Binary search for first negative number
        let left = 0;
        let right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (row[mid] < 0) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        negNumbers += n - left;
    }
    return negNumbers;
};
*/


console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); //  8
console.log(countNegatives([[3,2],[1,0]])); //  0