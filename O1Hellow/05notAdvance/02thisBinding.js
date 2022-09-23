var user = {
    firstName : "Aarish",
    lastName : "khan",
    role : "Admin",
    courseCount : 3,
    getinfo : function () {
        console.log(`
        first name is ${this.firstName}
        last name is ${this.lastName}
        his role is ${this.role}
        and he is studying ${this.courseCount}
        `);
    },
};    

const dj = {
    firstName : "Roke",
    lastName : "Dj",
    role : "Sub-Admin",
    courseCount : 4,
};

user.getinfo();

//Bind point toward the method you want to borrow//

user.getinfo.bind(dj)();//or you can store this variable//

//also use CALL method to borrow the method//

user.getinfo.call(dj);//you can directly call method by using call//




