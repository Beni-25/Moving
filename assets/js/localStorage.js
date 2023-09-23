function getAllUsers() {
    console.log("Inside getALLUSERS");
  let allUsers = localStorage.getItem(window.USER_LIST_KEY);// get the values from window.USER_LIST_KEY  ie,USERS
  if (allUsers == null || allUsers == "" ) {// if allUsers is null or empty
    console.log("Null in ALLUSERS");
    localStorage.setItem(window.USER_LIST_KEY, JSON.stringify([]));// set [] as string (ie,[] to "[]") empty array to string
    return [];//return empty array to saveUser function
  } else {//if allUsers has any values
    return JSON.parse(allUsers);//return  converted string to Javascript object to saveUser function eg: '{username: "1", password: "2"..}' to {username: "1", password: "2"..}
  }
}

function getUser(username) {
    console.log("Get User"); 
    let allUsers = localStorage.getItem(window.USER_LIST_KEY); // [ {username: "1", password: "2"..}, {username: "3", password: "4"..} ]
    if (allUsers == null || allUsers == "" ) {//if allUsers is null or empty
        return null;//return null to saveUser function
    } else {//if allUsers has any values
        allUsers =JSON.parse(allUsers);//get the Javascript object from string in allUsers ie,'{username: "1", password: "2"..}' to {username: "1", password: "2"..}
        console.log("Listing all users", allUsers);
        allUsers.forEach(user => {  // {username: "1", password: "2"..} (each set of object will be called one by one using forEach)user means a set of object; allUsers means array of user objects
            if(user["username"] == username) { // user["username"] = 1; checks whether current set user object username property matches the username
                console.log("User found", user)
                return user; // {username: "1", password: "2"..} returns user object (exit current set of object)
            }
        });
        console.log("User not found")
        return null
    }
  }

function saveUser(username, password, c_password, phone, email) {//saveUser(username:"1", password:"2", c_password:"2", phone:"3", email:"4")
  console.log("Saving user"); 
  if (password !== c_password) { // password compare with c_ password
    alert("Password is not matching with confirm password"); //alert shows if it is not matching
    return null; // password not equal c_ password; return to register.js saveUser function
  } else { //Password is same as c_password
    let allUsers = getAllUsers();// call getAllUsers() function, saves data into allUsers, e.g., [ {username: "1", password: "2"..}, {username: "3", password: "4"..} ] or []
    console.log("Getting all users", allUsers) 
    let user = getUser(username); // call getUser() function, saves user as either a set of user object or null
    console.log(user, "saveUser | getUser(username)");
    if (user == null) {// if user is null, execute below code
      const USER_PAYLOAD = {
        username: username, //get values as object in USER_PAYLOAD ie, { username:"1", password:"2", c_password:"2", phone:"3", email:"4"}
        password: password,
        phone: phone,
        email: email,
      };
      allUsers.push(USER_PAYLOAD);
      //localStorage.setItem(USER_KEY,JSON.stringify(USER_PAYLOAD));
      localStorage.setItem(window.USER_LIST_KEY ,JSON.stringify(allUsers));
      console.log("User payload", USER_PAYLOAD);
      return getUser(username); 
    } else {
      alert(`User with username ${username} already exists.`);// alert to indicate the same username exists
      return null;// 
    }
  }

}


