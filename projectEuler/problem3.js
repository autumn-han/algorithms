// prompt: what is the largest prime factor of the number 600851475143

// function returns true if integer has factors other than 1 and itself
function isPrime(wholeNum) {
  let count = 0;
  for (let i = 2; i < wholeNum / 2; i++) {
    if (wholeNum % i === 0) {
      count++;
    }
  }
  if (count !== 0) {
    return false;
  } else {
    return true;
  }
}

function largestPrime(num) {
  for (let i = 2; i < num / 2; i++) {
    // check if factor is a whole number
    if (num % i === 0) {
      let wholeNum = num / i;
      // check if factor is a prime number
      if (isPrime(wholeNum) === true) {
        return wholeNum;
      }
    }
  }
}
