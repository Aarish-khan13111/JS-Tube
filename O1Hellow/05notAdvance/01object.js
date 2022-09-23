var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getcourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

//injecting some other thing  to object using prototype//

User.prototype.getfirstName = function () {
    console.log(`your firstName is: ${this.firstName}`);
};


var Aarish = new User("Aarish", 2);
Aarish.getfirstName();
Aarish.getcourseCount();
// console.log(Aarish);

var samy = new User("samy",5);
samy.getfirstName();
samy.getcourseCount();
// console.log(samy);
