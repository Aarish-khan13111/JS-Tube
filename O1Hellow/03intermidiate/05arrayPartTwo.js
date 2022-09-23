function isEven(element) {
//     if (element % 2 ===0) {
//         return true;
//     }
//     return false;
return element % 2 ===0;    

}
//console.log(isEven(5));

//We can also write that code in one line//

var isEven = (element) => {
    return element % 2 === 0;  
};
//console.log(isEven(4));


//We can do it directly as well//

var result = [2, 4, 6, 8].every(isEven);
//console.log(result);

// How these callback are return//

var result = [2, 3, 6, 8].every((e) => e % 2 ===0);
console.log(result);//if you user curly braces then u have use return key word

// you can use the syntax below//

var result = [2, 4, 6, 8].every((e) => (e % 2 ===0));
console.log(result);
// result is going to be the same//