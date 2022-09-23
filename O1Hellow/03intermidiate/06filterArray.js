var testArray  = [2, 4, 6, 8, 10, 12, 14, 16, 18];

//console.log(testArray.fill("A", 2, 5));


// When u use filter u will get entire new array//

const myNumber = [23, 45, 36, 89, 25, 15, 12];

const result = myNumber.filter((num) => (num >= 25));
//console.log(result);


//SLICE AND SPLICE//

var user = ["tim", "ted", "ton", "sam", "sor", "sod"];
console.log(user);
//console.log(user.slice(1,5,));

user.splice(1,2,"hi");
console.log(user);