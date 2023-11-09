//toggle password using eye icon
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {
  loggedInUser = getLoggedInUser();
  if (loggedInUser == null) {
    $("button#signin").on("click", function (e) {
      const username = $("input#username").val(); //get the value of username
      const password = $("input#password").val(); //get the value of password
      // Check if username and password are not empty
      if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return; // Prevent further execution
      }

      let user = checkUserPassword(username, password);
      if (user != null) {
        //check the value of user, if null execute if block
        //if user not null and it has value, execute else block
        console.log("Signing up", e);
        e.preventDefault(); // Stops <form> from reloading the page
        window.location.href = "index.html";
      }
    });
  } else {
    window.location.href = "index.html";
  }
});
