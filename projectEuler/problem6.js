// prompt: for the first one hundred natural numbers, find the difference between the sum of the squares of and the square of the sum

function sumSquareDiff() {
  let i = 1;
  let sumOfAllNums = 0;
  let sumOfAllSqrdValues = 0;
  do {
    // set sumOfAllNums to store the sum of all values between 1 and 100
    sumOfAllNums += i;
    // set sumOfAllSqrdValues to store the sum of values squared between 1 and 100
    sumOfAllSqrdValues += i ** 2;
    // increment i to iterate through
    i++;
  } while (i <= 100);
  // find the difference between the two sums
  return sumOfAllNums ** 2 - sumOfAllSqrdValues;
}
