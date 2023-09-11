//today's date autopopulate
document.addEventListener("DOMContentLoaded", function () {
  var bdate = document.getElementById("date");
  var today = new Date();
  var formattedDate = today.toISOString().split("T")[0];
  bdate.value = formattedDate;
});

  //Multistep with  tab navigation
  function showStep(stepNumber) {
    const formSteps = $('.form-step');
     const stepTabs = $('.step-tab');

       stepTabs.removeClass('active');
     formSteps.removeClass('active');
     
          stepTabs.eq(stepNumber - 1).addClass('active');
     
        formSteps.eq(stepNumber - 1).addClass('active');
   }

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {


   //tick icon show
   $(".bi-check").hide();
   $(".step1input").on("click", function() {
    $(".step1icon").show();
   })

//Booking Button color change on mouseenter & mouseleave
$("#bookingbtn").on("mouseenter", () => {
  $("#bookingbtn").css({
    color: "white",
  });
});

$("#bookingbtn").on("mouseleave", () => {
  $("#bookingbtn").css({
    color: "black",
  });
});

//Social Media Icons color change on mouseenter & mouseleave
$(".bi-facebook").on("mouseenter", () => {
  $(".bi-facebook").addClass("bi-active");
});
$(".bi-facebook").on("mouseleave", () => {
  $(".bi-facebook").removeClass("bi-active");
});

$(".bi-envelope").on("mouseenter", () => {
  $(".bi-envelope").addClass("bi-active");
});
$(".bi-envelope").on("mouseleave", () => {
  $(".bi-envelope").removeClass("bi-active");
});

$(".bi-linkedin").on("mouseenter", () => {
  $(".bi-linkedin").addClass("bi-active");
});
$(".bi-linkedin").on("mouseleave", () => {
  $(".bi-linkedin").removeClass("bi-active");
});
$(".bi-instagram").on("mouseenter", () => {
  $(".bi-instagram").addClass("bi-active");
});
$(".bi-instagram").on("mouseleave", () => {
  $(".bi-instagram").removeClass("bi-active");
});
});