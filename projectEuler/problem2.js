// prompt: by considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms
function evenFibSum() {
  let sum = 0;
  let i = 0;
  let j = 1;
  let k = i + j;
  while (k < 4000000) {
    i = j;
    j = k;
    k = i + j;
    if (k % 2 === 0) {
      sum += k;
    }
  }
  return sum;
}
