//1)Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.
function theLargestProduct(arr) {
  let largestProduct = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > largestProduct) {
      largestProduct = arr[i] * arr[i + 1];
    }
  }
  return largestProduct;
}

//2)Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.
function findMissingNums(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let res = max - min - 1 - (arr.length - 2);
  return res;
}

//3)Implement built in array sort method using bubble sort algorithm.
function manualSort(cb) {
  let arr = [...this];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (cb(arr[j + 1], arr[j]) <= 0) {
        let current = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = current;
      }
    }
  }
  return arr;
}

//4)Insert a n positive number. Print the n-st prime number.
function nThPrime(n) {
  if (n <= 0) {
    return "Please enter only positive numbers";
  }
  let primeIndex = 0;
  number: for (let i = 2; ; i++) {
    for (let j = 2; j <= Math.floor(i / 2); j++) {
      if (i !== j && i % j === 0) {
        continue number;
      }
    }
    primeIndex++;
    if (primeIndex === n) {
      return i;
    }
  }
}
console.log(nThPrime(1));

//5) Implement Array.from() method
function manualFrom(arrayLike, mapFn) {
  let arr = [];
  for (let index in arrayLike) {
    if (typeof +index === "number" && !isNaN(+index)) {
      arr[+index] = arrayLike[index];
    } else if (index !== "length") {
      arr.push(arrayLike[index]);
    } else {
      arr.length = arrayLike[index];
    }
  }
  return arr;
}
