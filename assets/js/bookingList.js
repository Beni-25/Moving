// FUNCTIONS
let bookingObject ={};

// let trackBtnId = `track-btn-${bookingObject["id"]}`;
// let ModifyBtnId = `modify-btn-${bookingObject["id"]}`; 
// let CancelBtnId = `cancel-btn-${bookingObject["id"]}`;

function trackBooking(bookingObject) {
  alert("track Booking");
  console.log("bookingObject", bookingObject);
  setNewSelectedBooking(newSelectedBooking);
  //go to track page window.href
  window.location.href = "tracking.html";
}
function modifyBooking(bookingObject) {
  alert("modify booking");
  console.log("bookingObject", bookingObject);
  setNewSelectedBooking(newSelectedBooking);
  //go to modify page window.href
  window.location.href = "modify.html";
}
function cancelBooking(bookingObject) {
  alert("cancel booking");
  console.log("bookingObject", bookingObject);
  setNewSelectedBooking(newSelectedBooking);
  //go to savemodifieddetails function and save after filter
  cancelBooking(newSelectedBooking);
}

function renderBookings(allBookings, loggedInUser) {
  allBookings.forEach((bookingObject) => {
    console.log("Creating card for booking: ", bookingObject);

    trackBtnId = `track-btn-${bookingObject["id"]}`;
    ModifyBtnId = `modify-btn-${bookingObject["id"]}`;
    CancelBtnId = `cancel-btn-${bookingObject["id"]}`;

    $("#list-of-bookings").append(`
    <div class="list container text-center rounded mt-4">
        <div class="row align-items-center p-4">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>Booking ID: ${bookingObject["id"]}</p>
            <p>Contact Number: ${loggedInUser["phone"]}</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>Pickup Address: ${bookingObject["P_address1"]}</p>
            <p>Drop Address: ${bookingObject["D_address1"]}</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <button
              id='${trackBtnId}'
              class="btn btn-light"
               data-booking='${JSON.stringify(bookingObject)}'
            >
              Track
            </button>
            <button
              class="btn btn-light"
              id='${ModifyBtnId}'
            >
              Modify
            </button>
            <button
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              id='${CancelBtnId}'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>`);
    console.log(`#${trackBtnId}`);
    
   
  });
 
}


$("#list-of-bookings").on("click", '[id^="track-btn-"]', function () {
  const trackButton = $(this);
  const bookingObject = JSON.parse(trackButton.data("booking"));
  alert("Clicked Track btn with ID: " + bookingObject.id);
});


// $(`#${trackBtnId}`).on("click", function () {
//   alert("clicked track");
//   // trackBooking(`${bookingObject}`);
// });
$(`#${ModifyBtnId}`).on("click", function () {
  alert("clicked modify");
  // modifyBooking(`${bookingObject}`);
});
$(`#${CancelBtnId}`).on("click", function () {
  alert("clicked cancel");
  // cancelBooking(`${bookingObject}`);
});
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

  let loggedInUser = JSON.parse(localStorage.getItem(window.LOGGEDIN_USER_KEY));

  let allBookings = JSON.parse(localStorage.getItem(window.BOOKINGS_KEY));
  if (allBookings == null) {
    alert("no bookings found, create a booking");
    window.location.href = "booking.html";
  } else {
    console.log("bookings found", allBookings);
    renderBookings(allBookings, loggedInUser);
  }
});
