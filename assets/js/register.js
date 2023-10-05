// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS
$(document).ready(function () {
  loggedInUser = getLoggedInUser();

  if (loggedInUser == null) {
    // On register Page redirect to home page
    $("button.signup").on("click", function (e) {
      const username = $("input#username").val();
      const password = $("input#password").val();
      const c_password = $("input#c_password").val();
      const phone = $("input#phone").val();
      const email = $("input#email").val();
      // Check if inputs not empty
      if (
        username.trim() === "" ||
        password.trim() === "" ||
        c_password.trim() === "" ||
        phone.trim() === "" ||
        email.trim() === ""
      ) {
        alert("Please enter all the details.");
        return; // Prevent further execution
      }

      let user = saveUser(username, password, c_password, phone, email); //eg:username:"1", password:"2", c_password:"2", phone:"3", email:"4"
      if (user == null) {
        alert("Error creating user");
      } else {
        console.log("Signing up", e);
        e.preventDefault(); // Stops <form> from reloading the page
        window.location.href = "index.html";
      }
    });
  } else {
    window.location.href = "index.html";
  }
});
