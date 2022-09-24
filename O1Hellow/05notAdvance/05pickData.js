//Desturcture the data

const user = ["Aarish", 5, "admin"];

var role = user[2];
var name = user[0];
console.log(role);

//Or you can use this way

var [name, courseCount, role] = user;
console.log();

//You can Destructure the Object as well

const myUser = {
  name: "Arish",
  role: "admin",
  courseCount: 5,
};

console.log(myUser.courseCount);

//or you can do this way

const { name, role, courseCount } = myUser;
