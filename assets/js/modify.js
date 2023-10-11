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


  //social media buttons color change on mouse enter and leave
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

$("button#submit").on("click", function (e) {
  const date = $("input#date").val(); //get the value of date
  const time = $("input#time").val(); //get the value of time
  if(time.trim()===""){
    alert("Please enter the time for booking");
    return;
  }

  const P_address1 = $("input#P_address1").val(); //get the value of P_address1
  const P_address2 = $("input#P_address2").val(); //get the value of P_address2
  const P_city     = $("input#P_city").val(); //get the value of P_city
  const P_province = $("input#P_province").val(); //get the value of P_province
  const P_zipcode = $("input#P_zipcode").val(); //get the value of P_zipcode
  if(P_address1.trim()==="" || P_city.trim()==="" ||P_province.trim()==="" ||P_zipcode.trim()==="")
  {
    alert("Please enter the correct Pickup address for booking");
    return;
  }

  const D_address1  = $("input#D_address1").val(); //get the value of D_address1
  const D_address2  = $("input#D_address2").val(); //get the value of D_address2
  const D_city      = $("input#D_city").val(); //get the value of D_city
  const D_province  = $("input#D_province").val(); //get the value of D_province
  const D_zipcode   = $("input#D_zipcode").val(); //get the value of D_zipcode
  if(D_address1.trim()==="" || D_city.trim()==="" ||D_province.trim()==="" ||D_zipcode.trim()==="")
  {
    alert("Please enter the correct Drop address for booking");
    return;
  }

  const distance = $("input#distance").val(); //get the value of distance
  const load = $("input[name='load']:checked").val(); //get the value of load
  if(load == null){
    alert("please select the load type");
    return;
  }
  const instructions = $("textarea#instructions").val(); //get the value of instructions

  const parking = $("input[name='parking']:checked").val(); //get the value of parking
  if(parking == null){
    alert("please select the parking challenges");
    return;
  }
  const stairs = $("input[name='stairs']:checked").val(); //get the value of stairs
  if(stairs == null){
    alert("please select whether stairs are there");
    return;
  }
  const notification = $("#notification").val(); //get the value of notification

  let booking=saveDetails(date, time,P_address1,  P_address2, P_city , P_province, P_zipcode, 
    D_address1, D_address2 , D_city , D_province , D_zipcode, distance, load, instructions, 
    parking, stairs, notification )

  if(booking){
    alert("Form Submitted Successfully....");
  }else{
    alert("Error Submitting Form. Please try again");
  }

 e.preventDefault(); // Stops <form> from reloading the page
});




});