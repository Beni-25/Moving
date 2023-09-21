function getAllUsers() {
    console.log("Inside getALLUSERS");
  let allUsers = localStorage.getItem(window.USER_LIST_KEY);
  if (allUsers == null || allUsers == "" ) {
    console.log("Null in ALLUSERS");
    localStorage.setItem(window.USER_LIST_KEY, JSON.stringify([]));
    return [];
  } else {
    return JSON.parse(allUsers);
  }
}

function getUser(username) {
    console.log("Get User"); 
    let allUsers = localStorage.getItem(window.USER_LIST_KEY); // [ {username: "1", password: "2"..}, {username: "3", password: "4"..} ]
    if (allUsers == null || allUsers == "" ) {
        return null;
    } else {
        allUsers =JSON.parse(allUsers);//
        console.log("Listing all users", allUsers);
        allUsers.forEach(user => {  // {username: "1", password: "2"..}
            if(user["username"] == username) { // user["username"] = 1
                console.log("User found", user)
                return user; // {username: "1", password: "2"..}
            }
        });
        console.log("User not found")
        return null
    }
  }

function saveUser(username, password, c_password, phone, email) {
  console.log("Saving user"); 
  if (password !== c_password) { // password compare with c_ password
    alert("Password is not matching with confirm password"); //alert shows not matching
    return null; // password not equal c_ password; return to register.js saveUser function
  } else { //Password is same as c_password
    let allUsers = getAllUsers();// call getAllUsers() function, saves data into allUsers, e.g., [ {username: "1", password: "2"..}, {username: "3", password: "4"..} ]
    console.log("Getting all users", allUsers) 
    let user = getUser(username); // 
    console.log(user, "saveUser | getUser(username)");
    if (user == null) {
      const USER_PAYLOAD = {
        username: username,
        password: password,
        phone: phone,
        email: email,
      };
      allUsers.push()
      //localStorage.setItem(USER_KEY,JSON.stringify(USER_PAYLOAD));
      localStorage.setItem(window.USER_LIST_KEY ,JSON.stringify(allUsers));
      console.log("User payload", USER_PAYLOAD);
      return getUser(username); 
    } else {
      alert(`User with username ${username} already exists.`);
      return null;
    }
  }

}


