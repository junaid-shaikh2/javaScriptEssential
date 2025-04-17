let userRole = "admin";
let accesslevel;

if (userRole === "admin") {
    accesslevel = "Full access granted";
}
else if (userRole === "manager"){
    accesslevel = "Limited access granted";
}
else{
    accessLevel = "No access granted";
}
console.log("Access Level:", accesslevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "welcome, admin";
    }
    else{
        userMessage = "welcome, user";
    }
}
else{
    userMessage = "Please log in to access the system."
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);