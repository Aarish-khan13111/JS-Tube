class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  courseList = [];

  getinfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourses(name) {
    this.courseList.push(name);
  }
  getCourseList() {
    return this.courseList;
  }
  //with the word "static u can make any method privet which can not extend to any other new class"
  static logIn() {
    return "you are logged in";
  }
}

//this is how you can use other class methods in your new class
class subAdmin extends User {
  constructor(name, email) {
    super(name, email); //with this "super word you can acces the parameter of the another
    //class constructor into your new class without defining them "
  }
  getAdminInfo() {
    return "i am subadmin";
  }
}

const tom = new subAdmin("tom", "tom@;jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.logIn());
console.log(tom.getinfo());
