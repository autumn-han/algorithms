// prompt: by considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms
function evenFibSum() {
  // sum: setting a counter for the sum of all even integers in the sequence
  let sum = 0;
  // i: setting a variable for first value in sequence
  let i = 0;
  // j: setting a variable for second value in sequence
  let j = 1;
  // k: setting a variable for the sum of first and second values (third value in sequence)
  let k = i + j;
  // while k is below the value of 4 million:
  // --- store the second value in i
  // --- store the third value in j
  // --- store the sum of the new values of i and j in k
  // --- then check if k is an even integer with the modulo operator; if the remainder of k / 2 is 0, then increase the sum by k
  // we can think of this as shifting the 'frame' along the sequence; the frame being a composite of the previous integer,
  // the current integer, and the next integer in the sequence. As we move the frame along, we're checking the 'next integer' (k)
  // for whether it is even-valued
  while (k < 4000000) {
    i = j;
    j = k;
    k = i + j;
    if (k % 2 === 0) {
      sum += k;
    }
  }
  // return sum
  return sum;
}
