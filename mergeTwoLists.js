/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/**
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/*
Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/

/* first try solve as a array */

/*
function mergeTwoLists(list1, list2):

    create a new array (empty array)
    for each node in list1:
        push node value into new array
    for each node in list2:
        push node value into new array
    sort new array in ascending order

    return new array

*/

/*
var mergeTwoLists = function(list1, list2) {
    let newArr = [];

    // add all elements from list1
    for (let i = 0; i < list1.length; i++) {
        newArr.push(list1[i]);
    }

    // add all elements from list2
    for (let i = 0; i < list2.length; i++) {
        newArr.push(list2[i]);
    }

    // sort ascending
    newArr.sort((a, b) => a - b);

    return newArr;
};
*/

/* second try solve as a listnode */

/*
function mergeTwoLists(list1, list2):

    create a new ListNode called dummy with value 0
    set current pointer to dummy

    while both list1 and list2 are not null:
        if value of list1 node < value of list2 node:
            set current.next to list1 node
            move list1 to next node
        else:
            set current.next to list2 node
            move list2 to next node
        move current to current.next

    // attach remaining nodes
    if list1 is not null:
        set current.next to list1
    else if list2 is not null:
        set current.next to list2

    return dummy.next  // head of the merged list

*/

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;
    return dummy.next;
};


console.log(mergeTwoLists([1,2,4],[1,3,4]));
console.log(mergeTwoLists([],[]));
console.log(mergeTwoLists([],[0]));