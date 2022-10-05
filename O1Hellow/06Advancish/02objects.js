//import User from "./01classesjs.js"

const User = require("./01classejs.js");

const arish = new User("arish", "arish@1311.dev");

console.log(arish.getinfo());

arish.enrollCourses("react");
arish.enrollCourses("Angular");
arish.enrollCourses("vue");
console.log(arish.getCourseList());

let courses = arish.getCourseList();

courses.forEach((c) => console.log(c));
console.log(courses.length);
