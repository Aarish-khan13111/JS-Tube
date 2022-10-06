const Uno = () => {
  return "I am One";
};

//
const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am two");
    }, 3000);
  });
};

const tres = () => {
  return "I am three";
};
//while doing promise you have to use these async and await keyword
//this "async" key word make your method asyncronise
const callMe = async () => {
  let valueOne = Uno();
  console.log(valueOne);
  //this "await" key word make specific method imp
  let valueTwo = await dos();
  console.log(valueTwo);

  let valueThree = tres();
  console.log(valueThree);
};

callMe();
