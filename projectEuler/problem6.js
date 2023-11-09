// prompt: find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum

function sumSquareDiff() {
  let i = 1;
  var a = 0;
  var b = 0;
  do {
    // set a to store the sum of all values between 1 and 100
    a += i;
    // set b to store the sum of values squared between 1 and 100
    b += i ** 2;
    // increment i to iterate through
    i++;
  } while (i <= 100);
  // find the difference between the two sums
  let diff = a ** 2 - b;
  return diff;
}
