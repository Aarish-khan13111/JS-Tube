// var returnvalued = Math.max(2, 5, 6, 8, 9, 7);
// console.log(returnvalued);

// var myObj = {};

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, x: 8, y: 7 });
// console.log(myObj);

function sumOne(a, b) {
  return a + b;
}

var myAr = [5, 4];
//console.log(sumOne(...myAr));
//Spred oprator it takes individuial value and spred it into indivisuial value//

function sumTwo(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
//console.log(sumTwo(2, 3, 4, 5, 6, 7));
// this is REST oprator which convert indivisuial value into an array//

function sumTwo(a, b, ...args) {
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}
console.log(sumTwo(2, 3, 1, 1, 1, 1));
//in above function first two value treat as indivisual value and the rest of value will treat as "args"
///SPRED OP use when logging the value//console.log(sumOne(...myAr));
///REST OP use when defining the function//function sumTwo(a, b, ...args)
