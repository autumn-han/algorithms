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
  const lSum = new LinkedList();
  let strL1 = "";
  let strL2 = "";
  while (l1.head !== null) {
    strL1 = strL1.concat(l1.head.data);
    l1.head = l1.head.next;
  }
  while (l2.head !== null) {
    strL2 = strL2.concat(l2.head.data);
    l2.head = l2.head.next;
  }
  let reversedIntL1 = Number(strL1.split("").reverse().join(""));
  let reversedIntL2 = Number(strL2.split("").reverse().join(""));
  let sum = reversedIntL1 + reversedIntL2;
  let strSum = sum.toString();
  const strSumArr = strSum.split("");
  for (let i = 0; i < strSumArr.length; i++) {
    const val = Number(strSumArr[i]);
    lSum.add(val);
  }
  return lSum;
}

console.log(addTwoNumbers(l1, l2));
