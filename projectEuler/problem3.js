// prompt: what is the largest prime factor of the number 600851475143

function largestPrime(num) {
  // isPrime checks to see if number argument is a prime integer by checking to see if the integer has more than one and itself as factors
  function isPrime(wholeNum) {
    var count = 0;
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
