function password(password){
    const hasNumber = /\d/.test(password);
    if(password.length>=8 && hasNumber){
        return "Strong Password";
    }
    else {
        return "Weak Password";
    }
}
console.log(password("123456789"));