function getAllUsers() {
  console.log("Inside getALLUSERS");
  let allUsers = localStorage.getItem(window.USER_LIST_KEY); // get the values from window.USER_LIST_KEY
  if (allUsers == null || allUsers == "") {
    // if allUsers is null or empty
    console.log("Null in ALLUSERS");
    localStorage.setItem(window.USER_LIST_KEY, JSON.stringify([])); // set USERS [] as string (ie,[] to "[]") empty array to string
    return []; //return empty array to saveUser function
  } else {
    //if allUsers has any values
    return JSON.parse(allUsers); //return  converted string to Javascript object to saveUser function eg: '{username: "1", password: "2"..}' to {username: "1", password: "2"..}
  }
}

function getUser(username) {
  console.log("Get User");
  let allUsers = localStorage.getItem(window.USER_LIST_KEY); // [ {username: "1", password: "2"..}, {username: "3", password: "4"..} ] or []
  if (allUsers == null || allUsers == "") {
    //if allUsers is null or empty
    return null; //return null to saveUser function
  } else {
    //if allUsers has any values
    allUsers = JSON.parse(allUsers); //get the Javascript object from string in allUsers ie,'[{username: "1", password: "2"..}]' to {username: "1", password: "2"..}
    console.log("Listing all users", allUsers);
    // allUsers.forEach(user => {  // {username: "1", password: "2"..} (each set of object will be called one by one using forEach)user means a set of object; allUsers means array of user objects
    //     if(user["username"] == username) { // user["username"] = 1; checks whether current set user object username property matches the username given
    //         console.log("User found", user)
    //         return user; // {username: "1", password: "2"..} returns user object (exit current set of object)
    //     }
    // });

    for (const user of allUsers) {
      // forEach will execute each set one by one; even if it found the same username it will execute the next object
      if (user["username"] === username) {
        //in this for loop, we need to stop and return the user as soon as same username found
        console.log("User found", user);
        return user;
      }
    }
    console.log("User not found");
    return null;
  }
}

function getLoggedInUser() {
  let loggedinUser = localStorage.getItem(window.LOGGEDIN_USER_KEY);
  if (loggedinUser == null || loggedinUser == "") {
    return null;
  } else {
    return JSON.parse(loggedinUser);
  }
}

function saveUser(username, password, c_password, phone, email) {
  //saveUser(username:"1", password:"2", c_password:"2", phone:"3", email:"4")
  console.log("Saving user");
  if (password !== c_password) {
    // password compare with c_ password whether not equal
    alert("Password is not matching with confirm password"); //alert shows if it is not matching
    return null; // password not equal c_ password; return to register.js saveUser function
  } else {
    //Password is same as c_password
    let allUsers = getAllUsers(); // call getAllUsers() function, saves data into allUsers, e.g., [ {username: "1", password: "2"..}, {username: "3", password: "4"..} ] or []
    console.log("Getting all users", allUsers);
    let user = getUser(username); // call getUser() function, saves user as either a set of user object or null; if username matching then gives user object ie, {username: "1", password: "2"..}
    console.log(user, "saveUser | getUser(username)");
    if (user == null) {
      // if user is null, execute below code

      const USER_PAYLOAD = {
        username: username, //get values as object in USER_PAYLOAD ie, { username:"1", password:"2", phone:"3", email:"4"}
        password: password,
        phone: phone,
        email: email,
      };
      allUsers.push(USER_PAYLOAD); // push the object ie, { username:"1", password:"2", phone:"3", email:"4"} to allUsers array
      localStorage.setItem(
        window.LOGGEDIN_USER_KEY,
        JSON.stringify(USER_PAYLOAD)
      ); //set the current user(loggedin user in local storage)
      localStorage.setItem(window.USER_LIST_KEY, JSON.stringify(allUsers)); //set the object value as string ie, "[{ username:"1", password:"2", phone:"3", email:"4"}]""
      console.log("User payload", USER_PAYLOAD);
      return getUser(username); // go to getUser(username) function to check the username exists or not
    } else {
      // if user has value and same username exists
      alert(`User with username ${username} already exists.`); // alert to indicate the same username exists
      return null; // return to inside if loop to create new USER_PAYLOAD
    }
  }
}
function checkUserPassword(username, password) {
  let user = getUser(username); //user= {username:"1", password:"2", phone:"3", email:"3"} or null
  if (user == null) {
    alert("Login details not found");
    console.log("user null");
    return null;
  } else {
    if (user["password"] === password) {
      console.log("User found", user);
      localStorage.setItem(window.LOGGEDIN_USER_KEY, JSON.stringify(user)); //set the current user(loggedin user in local storage)
      return user;
    }
  }
}


function saveDetails(date, time, P_address1, P_address2, P_city, P_province, P_zipcode,
  D_address1, D_address2, D_city, D_province, D_zipcode, distance, load, instructions,
  parking, stairs, notification) {
  try{// entering inside try to check whether code is executing properly, if not it will go to catch block
    let allBookings = JSON.parse(localStorage.getItem(window.BOOKINGS_KEY)) || [];// check whether any existing bookings there or not
    let loggedInUser =JSON.parse( localStorage.getItem(window.LOGGEDIN_USER_KEY) );
    console.log(loggedInUser, "loggedInUser");
    let loggedInUsername = (loggedInUser["username"]);
    console.log(loggedInUsername, "loggedInUsername");
    if(loggedInUsername == null){
      alert("username not exists");
      return;
    }
    let bookingID = loggedInUsername + "-" + date + "-" + time
    // Create a booking object 
    const booking = {
      id: bookingID,
      date: date,
      time: time,
      P_address1: P_address1,
      P_address2: P_address2,
      P_city: P_city,
      P_province: P_province,
      P_zipcode: P_zipcode,
      D_address1: D_address1,
      D_address2: D_address2,
      D_city: D_city,
      D_province: D_province,
      D_zipcode: D_zipcode,
      distance: distance,
      load: load,
      instructions: instructions,
      parking: parking,
      stairs: stairs,
      notification: notification
    };
  
    allBookings.push(booking);//push the object ie, {date:"1", time:"2",....} to allBookings
    localStorage.setItem(window.BOOKINGS_KEY, JSON.stringify(allBookings)); // Set the updated current booking in the localStorage
    localStorage.setItem(window.SELECTED_BOOKING_KEY,JSON.stringify(booking));
    return true;
  }catch{// if try block not executed or any error in setting in localStorage shows error in catch block
    console.log("Error saving details in the booking form ");
    return false;
  }
      }
 
 function getSelectedBooking(){ 
  let selectedBooking = localStorage.getItem(window.SELECTED_BOOKING_KEY);
  if (selectedBooking == null || selectedBooking == "") {
    return null;
  } else {
    return JSON.parse(selectedBooking);
  }
}