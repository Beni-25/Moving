// On register Page redirect to home page

// function register(){
//     window.location.href="/index.html";
// }

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS
$(document).ready(function () {
    $( "button.signup" ).on( "click", function(e) {
        console.log("Signing up", e);
        e.preventDefault(); // Stops <form> from reloading the page
        window.location.href='index.html'; 
    } );
});