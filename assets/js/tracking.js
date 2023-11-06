// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {
  let loggedInUser = getLoggedInUser();
  if (loggedInUser !== null) {
    let selectedBooking = getSelectedBooking();
    if (selectedBooking !== null) {
      $("#bookingID").text("BOOKING ID : " + selectedBooking["id"]);
      $("#pickup").text(
        "PICKUP : " +
          selectedBooking["P_address1"] +
          selectedBooking["P_address2"]
      );
      $("#drop").text(
        "DROP : " +
          selectedBooking["D_address1"] +
          selectedBooking["D_address2"]
      );
      $("#date").text("DATE : " + selectedBooking["date"]);
      $("#time").text("APPROXIMATE PICKUP TIME : " + selectedBooking["time"]);
      $("#droptime").text("APPROXIMATE DROP TIME : ");
    } else {
      alert("No booking found, create a booking");
      window.location.href = "booking.html";
    }
  } else {
    console.log("No User Logged in, please sign in");
    window.location.href = "login.html";
  }

});
