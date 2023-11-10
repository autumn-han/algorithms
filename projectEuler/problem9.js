// prompt: find the pythagorean triplet whose sum equals 1000 and return the product of the triplet
// pythagorean triplet: a < b < c and a^2 + b^2 = c^2
// find triplet where a + b + c = 1000;

// check that the values entered fulfill the conditions:
// 1. a^2 + b^2 = c^2
// 2. a + b + c = 1000
function pyTest(a, b, c) {
  if (a ** 2 + b ** 2 === c ** 2) {
    if (a + b + c === 1000) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
// main function
function pyTrip() {
  for (let c = 5; c < 1000; c++) {
    for (let b = 1; b < c; b++) {
      for (let a = 1; a < b; a++) {
        if (pyTest(a, b, c) === true) {
          let z = a * b * c;
          return z;
        }
      }
    }
  }
}
