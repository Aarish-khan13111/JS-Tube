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
}

module.exports = User;
