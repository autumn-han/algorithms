// prompt: find the smallest positive number that is evenly divisible by all of the numbers from 1 to 20

// checks if integer is divisible by all numbers from 1 to 20
function isDivisible(int) {
  for (let i = 3; i <= 20; i++) {
    if (int % i !== 0) {
      return false;
    }
  }
  return true;
}

// main function
function calcSmallestMult() {
  let i = 20;
  do {
    isDivisible(i);
    i += 20;
  } while (isDivisible(i) === false);
  return i;
}

console.log(smallestMult());
