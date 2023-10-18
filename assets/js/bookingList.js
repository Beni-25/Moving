// FUNCTIONS

function renderBookings() {
  bookingList.forEach((bookingObject) => {
    console.log("Creating card for booking: ", bookingObject);
    $("#list-of-bookings").append(`
    <div class="list container text-center rounded mt-4">
        <div class="row align-items-center p-4">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>Booking ID: ${bookingObject["id"]}</p>
            <p>Contact Number: ${bookingObject["contact"]}</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>Pickup Address: ${bookingObject["pickup"]}</p>
            <p>Drop Address: ${bookingObject["drop"]}</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <button
              class="btn btn-light"
              onclick="window.location.href='tracking.html';"
            >
              Track
            </button>
            <button
              class="btn btn-light"
              onclick="window.location.href='modify.html';"
            >
              Modify
            </button>
            <button
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>`);
  });
}

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {
  
  
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

  let allBookings = JSON.parse(localStorage.getItem(window.BOOKINGS_KEY));
  if(allBookings == null){
    alert("no bookings found, create a booking");
    window.location.href = "booking.html";
  
  }else{
    console.log("bookings found",allBookings);
    renderBookings();
  }
  

});
