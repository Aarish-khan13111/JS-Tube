var myMap = new Map();

myMap.set(1, "uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "cuatro");

//console.log(myMap);

//how to grab a Key in maps

for (let key of myMap.keys()) {
  console.log(`key is ${key}`);
}

//how to grab a value in maps

for (let value of myMap.values()) {
  console.log(`value is ${value}`);
}

//how to grab both key and value

for (let [key, value] of myMap) {
  console.log(`key is ${key} value is ${value}`); //in for of loop it will give key first
}

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`)); // in forEach it will give value first
