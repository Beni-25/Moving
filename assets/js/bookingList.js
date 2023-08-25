
// FUNCTIONS

function renderBookings() {
    bookingList.forEach((bookingObject) => {

        console.log("Creating card for booking: ", bookingObject);
        $("#list-of-bookings").append(`
    <div class="list container text-center rounded mt-4">
        <div class="row align-items-center">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>NAME: ${bookingObject["name"]}</p>
            <p>BOOKING ID: ${bookingObject["id"]}</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>PICKUP: ST.JOHN'S</p>
            <p>DROP: MOUNT PEARL</p>
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
      </div>    
        `);
    });
}

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {
  // Handler for .ready() called.
  renderBookings();
});
