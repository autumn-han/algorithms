// input
const logs = [
  "2023-10-01: User1",
  "2023-10-02: User1",
  "2023-10-02: User2",
  "2023-10-02: User2",
  "2023-10-02: User2",
  "2023-10-03: User3",
  "2023-10-03: User3",
  "2023-10-03: User1",
];
// expected output
// ["2023-10-01", 1]
// ["2023-10-02", 2]
// ["2023-10-03", 1]

// TANNER'S METHOD
// store data in an object
const visitorLog = {
  // create keys for each date with an empty Set() as the value
  // populate set with unique users
  // return set.size
};

// AUTUMN'S METHOD
function countUsersForEachDate(arr) {
  let date = arr[0][0];
  let count = 0;
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === date) {
      count++;
    } else if (i === arr.length - 1) {
      returnArr.push([arr[i][0], count]);
    } else {
      returnArr.push([date, count]);
      date = arr[i][0];
      count = 1;
    }
  }
  for (let i = 0; i < returnArr.length; i++) {
    console.log(returnArr[i]);
  }
}
function countLogs(logs) {
  let filteredArr = [...new Set(logs)];
  let parsedArr = [];
  for (let i = 0; i < filteredArr.length; i++) {
    parsedArr.push(filteredArr[i].split(": "));
  }
  return countUsersForEachDate(parsedArr);
}

countLogs(logs);
