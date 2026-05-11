function checkAccess(isLoggedIn, isAdmin) {
  if (isLoggedIn && isAdmin) {
    return "Admin Access";
  } else if (isLoggedIn) {
    return "User Access";
  } else {
    return "Access Denied";
  }
}

console.log(checkAccess(true, false));