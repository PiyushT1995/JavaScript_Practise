let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn === true && isAdmin === true){
    console.log("Admin Access");
}else if(isLoggedIn === true){
    console.log("User Access");
}else{
    console.log("Access Denied");
}