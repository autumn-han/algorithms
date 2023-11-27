// prompt: find the largest palindrome made from the product of two 3-digit numbers

function isPalindrome(num) {
  let numString = num.toString();
  let reversedNumString = numString.split("").reverse().join("");
  if (reversedNumString === numString) {
    return true;
  } else {
    return false;
  }
}

// find largest value in unsorted array
function largestVal(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// main function
function largestPal() {
  const palArr = [];
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      const k = i * j;
      if (isPalindrome(k) === true) {
        palArr.push(k);
      }
    }
  }
  return largestVal(palArr);
}

console.log(largestPal());
