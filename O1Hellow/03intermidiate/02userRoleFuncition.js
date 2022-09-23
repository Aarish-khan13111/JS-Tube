function getUserRole(name, role){
    switch (role) {
    case "admin":
        return `${name} is admin with all access`;
        break;
    case "subadmin":
         return `${name} is sub-admin with access to create and delet courses`;
         break;
     case "testperp":
        return `${name} is testprepwith access to create and delet test`;
        break;
    case "user":
        return `${name} is user to consume the contet`;
        break;
    default:
        return `${name} is a trail user`;
        break;
    }  

}

console.log(getUserRole("arish", "testprep"));

var getRole = getUserRole("Smay", "user");
console.log(getRole);
