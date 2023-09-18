function getAllUsers() {
    console.log("Inside getALLUSERS");
  let allUsers = localStorage.getItem(window.USER_LIST_KEY);
  if (allUsers == null || allUsers == "" ) {
    console.log("Null in getALLUSERS");
    localStorage.setItem(window.USER_LIST_KEY, JSON.stringify([]));
    return [];
  } else {
    return JSON.parse(allUsers);
  }
}

function getUser(username) {
    console.log("Get User");
    let allUsers = localStorage.getItem(window.USER_LIST_KEY);
    if (allUsers == null) {
        return null;
    } else {
        allUsers =JSON.parse(allUsers);
        console.log("Listing all users", allUsers);
        allUsers.forEach(user => {
            if(user["username"] == username) {
                console.log("User found", user)
                return user
            }
        });
        console.log("User not found")
        return null
    }
  }

function saveUser(username, password, c_password, phone, email) {
  console.log("Saving user");
  if (password !== c_password) {
    alert("Password is not matching with confirm password");
    return;
  } else {
    let allUsers = getAllUsers();
    console.log("Getting all users", allUsers)
    let user = getUser(username);
    if (user == null) {
      const USER_KEY = username;
      const USER_PAYLOAD = {
        username: username,
        password: password,
        phone: phone,
        email: email,
      };
      localStorage.setItem(USER_KEY,JSON.stringify(USER_PAYLOAD));
      console.log("User payload", USER_PAYLOAD);
      return getUser(username); 
    } else {
      alert(`User with username ${username} already exists.`);
      return null;
    }
  }

  // localStorage.setItem("username", "Benisha");
  // localStorage.setItem("phone", "+1 (709)1111111");
  // localStorage.setItem("email", "benisha@gmail.com");
  // localStorage.setItem("password", "Password123");
  // localStorage.setItem("c_password", "Password123");
}
