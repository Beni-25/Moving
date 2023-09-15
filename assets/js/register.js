// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS
$(document).ready(function () {
  // On register Page redirect to home page
  $("button.signup").on("click", function (e) {
    username = $('input#username').val();
    password =  $('input#password').val();
    c_password =  $('input#c_password').val();
    phone =  $('input#phone').val();
    email=  $('input#email').val();
    let user = saveUser(username, password, c_password, phone, email);
    if(user == null){
        alert("Error creating user")
    }else{
        console.log("Signing up", e);
        e.preventDefault(); // Stops <form> from reloading the page
        // window.location.href = "index.html";
    }
  });
});
