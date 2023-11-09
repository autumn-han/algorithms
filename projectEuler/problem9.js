// prompt: find the pythagorean triplet whose sum equals 1000 and return the product of the triplet
// pythagorean triplet: a < b < c and a^2 + b^2 = c^2
// find triplet where a + b + c = 1000;

// check that the values entered fulfill the conditions:
// 1. a < b < c
// 2. a^2 + b^2 = c^2
function isPyTriplet(a, b, c) {
  if (a < b && b < c) {
    if (a ** 2 + b ** 2 === c ** 2) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function pythagoreanTrip() {
  let sum = 0;
  let a = 3;
  let b = 4;
  let c = 5;
  while (sum <= 1000) {
    // check for all values being whole numbers
    // iterate through potential values of c, then finding b and a from the potential value
    // run a, b, and c values through isPyTriplet
  }
}
