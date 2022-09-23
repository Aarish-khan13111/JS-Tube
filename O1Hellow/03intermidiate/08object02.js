var user = {
    firstName : "Aarish",
    lastName : "khan",
    role : "Admin",
    logincount : 34,
    facebookSingIn : true,
    courseList : [],
    buycource : function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount : function () {
        return `${this.firstName }is enrolled in total of ${this.courseList.length}courses`
    },
    getInfo : function () {
        console.log(`
        First name : ${this.firstName}
        Last Name : ${this.lastName}
        role : ${this.role}
        logincount : ${this.logincount} 
        facebookSingin : ${this.facebookSingIn}
        courceList : ${this.courseList.length}
        `);
    },
};

var courseList = true
user.buycource("React JS course")
user.buycource("Angular course")
user.getInfo()