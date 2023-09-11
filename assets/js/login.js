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
        console.log("Signing in", e);
        e.preventDefault(); // Stops <form> from reloading the page
        document.location.href='index.html'; 
    } );
});
