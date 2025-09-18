/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/*
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
*/
 
/*
Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
*/

/*
function isValid(string):

    create a stack (empty list)

    for each character ch in string:
        if ch is an opening bracket ( '(', '[', '{' ):
            push ch into stack
        else if ch is a closing bracket ( ')', ']', '}' ):
            if stack is empty:
                return false
            pop top element from stack
            if popped element does not match with ch:
                return false
    
    if stack is empty:
        return true
    else:
        return false

*/

var isValid = function(s) {
    let stack = [];

    for (const ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            if (stack.length === 0){
                 return false;
            }
            const top = stack.pop();
            if ((ch === ')' && top !== '(') || (ch === ']' && top !== '[') || (ch === '}' && top !== '{')) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([])")); //true
console.log(isValid("([)]")); //false