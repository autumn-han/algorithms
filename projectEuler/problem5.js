// prompt: find the smallest positive number that is evenly divisible by all of the numbers from 1 to 20

// helper function for checking if integer is divisible by all numbers from 1 to 20
function isDivisible(int) {
  var count = 0;
  for (let i = 1; i <= 20; i++) {
    if (int % i === 0) {
      count++;
    }
  }
  if (count === 20) {
    return true;
  } else {
    return false;
  }
}

// main function
function smallestMult() {
  var i = 20;
  do {
    isDivisible(i);
    i += 20;
  } while (isDivisible(i) === false);
  return i;
}

console.log(smallestMult());
