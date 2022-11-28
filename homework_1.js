// 1) bring the last digit to the start
const inputNum = 256;
let res = 0;

if(inputNum < 10) {
    res = inputNum;
} else if(inputNum % 10 !== 0) {
    res = inputNum - inputNum % 10;
    res /= 10;
    res = inputNum % 10 + '' + res;
} else {
    res = '0' + inputNum / 10;
}

// console.log(res);

// 2) sort 3 numbers by ascending order
const num1 = 45, num2 = 78, num3 = 26;
let first = num1, second = 0, third = 0;

if(num2 > first) 
   first = num2;
else if(num3 > num2 && num2 > num1) 
   first = num3;

switch(first) {
    case num1:
        if(num2 > num3) {
           second = num2;
           third = num3;
        }
        else {
           second = num3;
           third = num2;
        }
    break;
    case num2:
        if(num1 > num3) {
           second = num1;
           third = num3;
        }
        else {
           second = num3;
           third = num1;
        }
    break;
    case num3:
        if(num2 > num1) {
           second = num2;
           third = num1;
        }
        else {
           second = num1;
           third = num2;
        }
    break;
}

console.log(third, second, first);

// 3) rewrite using 2 if
let n = +prompt();

let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) 
    i++;

if (n % 3 === 0 && n % 10 === 1) 
    j++;

// 4) compute area of rectangle or triangle
let shape = 'triangle';
let height = 6;
let base = 7;
let res = 0;

if(height > 0 && base > 0) {
    if(shape === 'triangle') 
   res = `Square of the ${shape} is ${height / 2 * base}`;
else if(shape === 'rectangle')
   res = `Square of the ${shape} is ${height * base}`;
else
   res = 'Error';
} else {
    res = 'Please enter only positive values';
}

console.log(res);

// 5) values to keys
let obj = { a: '1', b: '2', c: '2', d: '2' };
let newObj = {};

for(key in obj) {
    if(newObj.hasOwnProperty(obj[key])) {
        newObj[obj[key]].push(key);
    } else {
        newObj[obj[key]] = [key];
    }
}
for(newKey in newObj) {
    if(newObj[newKey].length == 1) {
        newObj[newKey] = newObj[newKey][0];
    }
}

console.log(newObj);
