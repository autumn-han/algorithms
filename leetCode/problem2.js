// --- prompt ---
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// --- definition for singly-linked list ---
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

// --- test case ---
// input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// output: [7. 0, 8]
// explanation: 342 + 465 = 807

function addTwoNumbers(l1, l2) {
  let tempHead = new ListNode(0); // initializing new node
  let current = tempHead; // initializing pointer to new node
  let carryOver = 0; // initializing variable to store any carry over from sum operations

  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = x + y + carryOver; // while l1 and l2 are not null perform sum operations for each corresponding node val

    carryOver = Math.floor(sum / 10); // calculate carry over for the next iteration
    current.next = new ListNode(sum % 10); // create new node and assign remainder from sum / 10 as val
    current = current.next; // move pointer to the next node

    // move to the next node in each given linked list, if not null
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // if there is carry over after running while loop, assign val to new node
  if (carryOver > 0) {
    currentHead.next = new ListNode(carryOver);
  }

  return tempHead.next; // return the node after tempHead, which is the head of the result linked list
}
