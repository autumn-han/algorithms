// prompt: find the sum of all the multiples of 3 and 5 below 100
function multSum(valOne, valTwo, max) {
  var sumOne = 0;
  var sumTwo = 0;
  var numOne = 1;
  var numTwo = 1;
  // finding all multiples of valOne
  do {
    var prodOne = valOne * numOne;
    numOne++;
    sumOne += prodOne;
  } while (prodOne < max);
  // finding all multiples of valTwo
  do {
    var prodTwo = valTwo * numTwo;
    numTwo++;
    sumTwo += prodTwo;
  } while (prodTwo < max);
  var sum = sumOne + sumTwo;
  return sum;
}

// adjusted
function multSum() {
  let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
