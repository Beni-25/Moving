// for loop
for (let i = 0; i < allUsers.length; i++) {
    const user = allUsers[i];
    if (user["username"] === username) {
        console.log("User found", user);
        return user;
    }
}

// for loop without i value ie, without index

for (const user of allUsers) {
    if (user["username"] === username) {
        console.log("User found", user);
        return user;
    }
}

// forEach loop
  allUsers.forEach(user => {  
            if(user["username"] == username) { 
                console.log("User found", user)
                return user; 
            }
        });

// while loop
let i=0;
while(i < allUsers.length){
    const user = allUsers[i];
    if (user["username"] === username) {
        console.log("User found", user);
        return user; 
    }
    i++;
}