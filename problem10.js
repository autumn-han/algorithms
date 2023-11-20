// prompt: find the sum of all primes below 2 million

// Tanner's isPrime()
// function isPrime(n) {
//   const maxFactor = Math.sqrt(n);

//   // Handle the special case of receiving 2
//   if (n === 2) {
//     return true;
//   }

//   // Handle negatives, 0, 1, and even numbers
//   if (n < 2 || n % 2 === 0) {
//     return false;
//   }

//   for (let i = 3; i <= maxFactor; i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function to determine whether a number is prime
function isPrime(a) {
  var j = 0;
  if (a === 4) {
    return false;
  }
  for (let i = 2; i < a / 2; i++) {
    counter++;
    if (a % i === 0) {
      return false;
    }
  }
  return true;
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
