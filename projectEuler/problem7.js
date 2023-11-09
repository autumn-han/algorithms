// prompt: find the 10001st prime number

// re-using isPrime function
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

// main function
function findPrime() {
  let i = 1;
  var a = 2;
  do {
    a++;
    if (isPrime(a) === true) {
      i++;
    }
  } while (i <= 10001);
  return a;
}

console.log(findPrime());
