// admin - get full access
// subadmin - get access to creates/delete cources 
// testprep - get access to creates/delete test
// user - get access to consume content 

var user = "user"
switch (user) {
    case "admin":
        console.log("get full access");
        break;
        case "subadmin":
        console.log("get access to creates/delete cources");
        break;
        case "testprep":
        console.log("get access to creates/delete test");
        break;
        case "user":
        console.log("get access to consume content ");
        break;
        
    default:
        console.log("trial user");
        break;
}