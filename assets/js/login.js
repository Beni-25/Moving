//toggle password
const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");
        togglePassword.addEventListener("click", function () {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            this.classList.toggle("bi-eye");
        });

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {
    $( "button#signin" ).on( "click", function(e) {
        const username = $("input#username").val();//get the value of username
        const password = $("input#password").val();//get the value of password
        let user = checkUser(username, password);
        if(user == null){//check the value of user, if null execute if block
            alert("User not found.");
        }
        else{//if user not null and it has value, execute else block
            console.log("Signing up", e);
            e.preventDefault(); // Stops <form> from reloading the page
            window.location.href = "index.html";
    }
         
    } );
});
