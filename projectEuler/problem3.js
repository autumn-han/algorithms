// prompt: what is the largest prime factor of the number 600851475143
function rLargestPrime(a, b) {
  // check if a / b is a whole number
  if (a % b === 0) {
    // if a whole number, set a = a / b
    a = a / b;
    // if
    if (a % b !== 0) {
      return a;
    } else {
      return rLargestPrime(a / b, b);
    }
  } else {
    console.log(a, b);
    return rLargestPrime(a, b + 1);
  }
}

rLargestPrime(600851475143, 2);
