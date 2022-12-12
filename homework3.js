// es eli moracel ei kcei...
//1) Given an array of numbers which is almost sorted in ascending order.  Find the index
//where sorting order is violated.
function violatedIndex(arr) {
  let res = -1;
  res = arr.findIndex((el, i, arr) => {
    return el < arr[i - 1];
  });
  return res;
}

//2)Given an array consisting from the arrays of numbers (like a two-dimensional array).
//Find sum of each row and print them as an array
function findSumOfRow(arr) {
  let res1 = arr.map((el) => {
    let sum = 0;
    for (let i = 0; i < el.length; i++) {
      sum += el[i];
    }
    return sum;
  });
  return res1;
}

//3) Given an array of integers. Write a function that return new array from first array,
//where removed even numbers, and odd numbers was multiplied with new array length
function removeOdds(arr) {
  return arr.filter((el) => el % 2 === 1).map((el) => el * res2.length);
}

//4) Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
//elements starting from a to b spaced by step.
function numsByStep(a, b, step) {
  let res2 = [a];
  let current = a;
  for (let i = a; i < b; i += step) {
    if (current + step <= b) {
      current += step;
      res2.push(current);
    }
  }
  return res2;
}

//5) Given an array of numbers. Print frequency of each unique number.

function frequency(arr) {
  let res3 = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === current) {
        count++;
      }
    }
    res3[current] = count / arr.length;
  }
  return res3;
}
