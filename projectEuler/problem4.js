// prompt: find the largest palindrome made from the product of two 3-digit numbers

// helper function isPalindrome(num) to determine if integer is a palindrome
function isPalindrome(num) {
  var count = 0;
  let numArr = String(num).split("").map(Number);
  let mid = Math.floor(numArr.length / 2);
  for (let i = 0; i < mid; i++) {
    if (numArr[i] === numArr[numArr.length - 1 - i]) {
      count++;
    }
  }
  if (count === mid) {
    return true;
  } else {
    return false;
  }
}

// helper function largestVal(arr) to find largest value in unsorted array
function largestVal(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] < arr[i]) {
      arr[0] = arr[i];
    }
  }
  return arr[0];
}

// main function
function largestPal() {
  var palArr = [];
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let k = i * j;
      if (isPalindrome(k) === true) {
        palArr.push(k);
      }
    }
  }
  return largestVal(palArr);
}

console.log(largestPal());
