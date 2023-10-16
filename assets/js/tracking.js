// Functions

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {

  let selectedBooking = getSelectedBooking();
  if(selectedBooking){
    $("#bookingID").text("BOOKING ID : " + selectedBooking["id"]);
    $("#pickup").text("PICKUP : " + selectedBooking["P_address1"] + selectedBooking["P_address2"]);
    $("#drop").text("DROP : " + selectedBooking["D_address1"] + selectedBooking["D_address2"]);
    $("#date").text("DATE : " + selectedBooking["date"]);
    $("#time").text("APPROXIMATE PICKUP TIME : " + selectedBooking["time"]);
    $("#droptime").text("APPROXIMATE DROP TIME : ");

  }

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

});