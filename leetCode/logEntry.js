// prompt: given an array of log entries (logs) that store a date and userID as a single string, return a sequence of arrays
// that show the date and the total number of unique userIDs for that date. You can assume that the dates will always be given
// in order of earliest to latest.

// test cases
const logs = [
  "2023-10-01: User1",
  "2023-10-02: User1",
  "2023-10-02: User2",
  "2023-10-02: User2",
  "2023-10-02: User2",
  "2023-10-03: User3",
  "2023-10-03: User3",
];
// expected output
// ["2023-10-01", 1]
// ["2023-10-02", 2]
// ["2023-10-03", 1]
const logsTwo = [
  "2023-10-01: User1",
  "2023-10-02: User1",
  "2023-10-02: User2",
  "2023-10-02: User3",
  "2023-10-02: User3",
  "2023-10-03: User1",
  "2023-10-03: User2",
  "2023-10-03: User3",
];
// expected output
// ["2023-10-01", 1]
// ["2023-10-02", 3]
// ["2023-10-03", 3]

// TANNER'S METHOD
// store data in an object
const visitorLog = {
  // create keys for each date with an empty Set() as the value
  // populate set with unique users
  // return set.size
};

// AUTUMN'S METHOD
// helper function
function countUsersForEachDate(arr) {
  let date = arr[0][0];
  let count = 0;
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    // check if the current index is the last log entry in the array
    if (i === arr.length - 1) {
      // check if the last log entry date is different from the previous entry
      if (arr[i][0] !== date) {
        // push the previously stored date and count to the returnArr
        returnArr.push([date, count]);
        // since we know this is the last log entry, push the current index date and count of 1 to the returnArr
        returnArr.push([arr[i][0], 1]);
      } else {
        // otherwise if the last log entry date matches the previous entry's date, increase count by 1 and then push stored date and count to the returnArr
        count++;
        returnArr.push([date, count]);
      }
    } else if (arr[i][0] === date) {
      // if the current index is not the last log entry and the current log entry's date matches the currently stored date, the increase count by 1
      count++;
    } else {
      // otherwise if the current index date is different than the currently stored date, push the currently stored date and count to the returnArr
      returnArr.push([date, count]);
      // store the current index date as the new date
      date = arr[i][0];
      // set count to 1 to account for the current log entry
      count = 1;
    }
  }
  // iterate through returnArr to print sub-arrays of dates and total unique log-ins
  for (let i = 0; i < returnArr.length; i++) {
    console.log(returnArr[i]);
  }
}

// main function
function countLogs(logs) {
  // take given log entry array and filter out duplicate strings
  let filteredArr = [...new Set(logs)];
  let parsedArr = [];
  // parse data from filteredArr into separate elements (e.g. [date, userID])
  for (let i = 0; i < filteredArr.length; i++) {
    parsedArr.push(filteredArr[i].split(": "));
  }
  // call in helper function
  return countUsersForEachDate(parsedArr);
}

countLogs(logs);
countLogs(logsTwo);
