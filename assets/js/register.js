//local storage
localStorage.setItem("username", "Smith");
document.getElementById("username").innerHTML = localStorage.getItem("username");

localStorage.removeItem("username");


// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS
$(document).ready(function () {
// On register Page redirect to home page
       $( "button.signup" ).on( "click", function(e) {
        console.log("Signing up", e);
        e.preventDefault(); // Stops <form> from reloading the page
        window.location.href='index.html'; 
    } );
});

