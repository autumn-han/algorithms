// prompt: find the sum of all primes below 2 million

// function to determine whether a number is prime
function isPrime(a) {
  var j = 0;
  if (a === 4) {
    return false;
  }
  for (let i = 2; i < a / 2; i++) {
    if (a % i === 0) {
      j++;
    }
  }
  if (j !== 0) {
    return false;
  } else {
    return true;
  }
}

// main function
function primeSum() {
  var a = 0;
  for (let i = 2; i < 2000000; i++) {
    if (isPrime(i) === true) {
      a += i;
    }
  }
  return a;
}

console.log(primeSum());
