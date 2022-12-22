//1)Given an array. Write a recursive function that removes the first
//element and returns the given array.
//[6, 78, ‘n’, 0, 1]
function manualPop(arr, first = arr[0], i = 0) {
  if (arr[arr.length - 1] === first) {
    arr.pop();
  } else {
    let save = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = save;
    manualPop(arr, first, i + 1);
  }
  return arr;
}

//2)Given an array of nested arrays. Write a recursive function that
// flattens it.
function flatter(arr, res = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatter(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

//3)Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.
function sumOfDigits(num) {
  let processNum = num.toString();
  let res = 0;
  for (let i = 0; i < processNum.length; i++) {
    res += +processNum[i];
  }
  if (res > 9) {
    res = sumOfDigits(res);
  }
  return res;
}

//4)Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.
let redears = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];
function SortBooks(arr) {
  arr = arr
    .filter((el) => el.readStatus)
    .sort((o2, o1) => o2.percent - o1.percent);
  let res = {};
  for (let obj of arr) {
    res[obj.book] = `${obj.percent}%`;
  }
  return res;
}
