
// FUNCTIONS

function renderBookings() {
    bookingList.forEach((bookingObject) => {

        console.log("Creating card for booking: ", bookingObject);
        $("#list-of-bookings").append(`
    <div class="list container text-center rounded mt-4">
        <div class="row align-items-center p-4">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>NAME: ${bookingObject["name"]}</p>
            <p>BOOKING ID: ${bookingObject["id"]}</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>PICKUP: ${bookingObject["pickup"]}</p>
            <p>DROP: ${bookingObject["drop"]}</p>
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
  

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {
  // Handler for .ready() called.
  renderBookings();
});
