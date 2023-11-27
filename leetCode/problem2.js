// prompt: You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// test case
// input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// output: [7. 0, 8]
// explanation: 342 + 465 = 807

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
}

// instantiate l1 and add data
const l1 = new LinkedList();
l1.add(3);
l1.add(4);
l1.add(2);
// instantiate l2 and add data
const l2 = new LinkedList();
l2.add(4);
l2.add(6);
l2.add(5);

// main function
function addTwoNumbers(l1, l2) {
  // take the last node of l1 and move through to head of linked list - store as a string variable
  // reverse string
  // concatenate the string with each element in the linked list in a while loop
  // ^^^ do the above with l2 in a separate while loop ^^^
  // convert strL1 and strL2 into integers (intL1 and intL2)
  // find sum of intL1 and intL2 and store as string
  // reverse sum
  // split sum into an array
  // instantiate l3
  // for each value in array, convert to integer and add to linked list l3
  // return l3
  let strL1;
  let strL2;
  while (l1.head !== null) {
    strL1 = strL1.concat(l1.head.data);
    l1.head = l1.head.next;
  }
  while (l2.head !== null) {
    strL2 = strL2.concat(l2.head.data);
    l2.head = l2.head.next;
  }
  reversedIntL1 = strL1.split("").reverse().join("").Number();
  reversedIntL2 = strL2.split("").reverse().join("").Number();
  let strSum = toString(reversedIntL1 + reversedIntL2);
  let reversedStrSum = strSum.reverse();
}
