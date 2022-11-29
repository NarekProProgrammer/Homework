// 1) shallowCompare

function shallowCompare(obj1, obj2) {
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// 2) check if the word is isogram

function isIsogram(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i !== j && word[j] === word[i]) {
        return false;
      }
    }
  }
  return true;
}

// 3) n-th Fibonacci number;

function nThFibonacciNum(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < n - 1; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// 4) if the product is divisible by the sum of digits

function quotientOrRemainder(num) {
  if (num === 0) {
    return "Cannot calculate";
  } else {
    let sum = 0;
    let product = 1;
    let res = "";
    for (let i = 0; i < String(num).length; i++) {
      sum += +String(num)[i];
      product *= +String(num)[i];
    }
    if (product % sum === 0) {
      res = `Quotient is ${product / sum}`;
    } else {
      res = `Remainder is ${product % sum}`;
    }
    return res;
  }
}

// 5) print X star pattern series

function matrix(xy) {
  let c = "";
  let b = xy;
  for (let i = 0; i <= xy; i++) {
    c = "";
    for (let a = 0; a <= xy; a++) {
      if (a === i || (a === b && i !== b - 1 && i !== b + 1)) {
        c += "*";
      } else c += " ";
    }
    b--;
    console.log(c);
    console.log("\n");
  }
}
