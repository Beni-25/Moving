//local storage


document.getElementById("username").innerHTML = localStorage.getItem("username");
localStorage.removeItem("username");


// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS
$(document).ready(function () {
// On register Page redirect to home page
       $( "button.signup" ).on( "click", function(e) {

        localStorage.setItem("username", "Benisha");
        localStorage.setItem("phone", "+1 (709)1111111");
        localStorage.setItem("email", "benisha@gmail.com");
        localStorage.setItem("password", "Password123");
        localStorage.setItem("c_password", "Password123");

        console.log("Signing up", e);
        e.preventDefault(); // Stops <form> from reloading the page
        window.location.href='index.html'; 
    } );
});

