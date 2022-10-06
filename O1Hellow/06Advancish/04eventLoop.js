const Uno = () => {
  console.log("I am One");
};
const dos = () => {
  setTimeout(() => {
    console.log("WHOOOOOO");
  }, 3000);
  console.log("I am two");
};
const tres = () => {
  console.log("I am three");
};

Uno();
tres();
dos();
