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

console.log(multSum(3, 5, 1000));
// answer: 268335
