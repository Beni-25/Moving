// FUNCTIONS

function trackBooking(bookingObjectId) {
  console.log("bookingObjectId", bookingObjectId);
  let booking = searchBooking(bookingObjectId);
  
  //go to track page
  if(booking !== null){
    console.log("booking found", booking)
    setNewSelectedBooking(booking);
    // alert("booking found");

    window.location.href = "tracking.html";
  }else{
    alert("Error tracking the booking with this booking ID");
  }

}
function modifyBooking(bookingObjectId) {
  console.log("bookingObjectId", bookingObjectId);
  let booking = searchBooking(bookingObjectId);
  if(booking !== null){
    console.log("booking found", booking)
    setNewSelectedBooking(booking);
    // alert("booking found");

    window.location.href = "modify.html";
  }else{
    alert("Error in modifying, Please check the booking ID");
  }

}
function cancelBooking(bookingObjectId) {
  // Confirm with the user before canceling the booking
  if (window.confirm("Are you sure you want to cancel this booking?")) {
    // If the user confirms, proceed with canceling the booking
    // let booking = searchBooking(bookingObjectId);
  //   if (booking !== null) {
  //     console.log("Booking found", booking);
  //     setNewSelectedBooking(newSelectedBooking);
  //     // Call your cancelBooking function here
      cancelBooking(bookingObjectId);
  //   } else {
  //     alert("Error canceling the booking. Please check the booking ID.");
  //   }
  // } else {
  //   // If the user cancels, do nothing or provide appropriate feedback
  //   alert("Booking cancellation canceled.");
  }
}

function renderBookings(allBookings, loggedInUser) {
  allBookings.forEach((bookingObject) => {
    console.log("Creating card for booking: ", bookingObject);

    let trackBtnId = `track-btn-${bookingObject["id"]}`;
    let modifyBtnId = `modify-btn-${bookingObject["id"]}`;
    let cancelBtnId = `cancel-btn-${bookingObject["id"]}`;

    

    $("div#list-of-bookings").append(`
    <div id='${bookingObject["id"]}' class="list container text-center rounded mt-4">
        <div class="row align-items-center p-4">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>Booking ID: ${bookingObject["id"]}</p>
            <p>Contact Number: ${loggedInUser["phone"]}</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <p>Pickup Address: ${bookingObject["P_address1"]}</p>
            <p>Drop Address: ${bookingObject["D_address1"]}</p>
          </div>
          <div id='${bookingObject["id"]}-btns' class="col-xs-12 col-sm-6 col-md-4">
            <button
              id='${trackBtnId}'
              class="btn btn-light"
              onclick=trackBooking('${bookingObject["id"]}')
            >
            Track
          </button>
            <button
              class="btn btn-light"
              id='${modifyBtnId}'
              onclick=modifyBooking('${bookingObject["id"]}')
            >
              Modify
            </button>
            <button
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              id='${cancelBtnId}'
              onclick=cancelBooking('${bookingObject["id"]}')
            >
              Cancel
            </button>
          </div>
        </div>
      </div>`);
    
  });
}

// $("#list-of-bookings").on("click", '[id^="modify-btn-"]', function () {
//   const modifyButton = $(this);
//   const modifyBtnId = modifyButton.attr("id");
//   const bookingId = modifyBtnId.replace("modify-btn-", "");
//   // const bookingObject = JSON.parse(modifyButton.data("booking"));
//   // console.log(bookingObject);
//   // modifyBooking(bookingObject);
//   alert("Clicked Modify btn with ID: " + bookingId);
// });

// $("#list-of-bookings").on("click", '[id^="cancel-btn-"]', function () {
//   const cancelButton = $(this);
//   const cancelBtnId = cancelButton.attr("id");
//   const bookingId = cancelBtnId.replace("cancel-btn-", "");
//   // const bookingObject = JSON.parse(cancelButton.data("booking"));
//   // console.log(bookingObject);
//   // cancelBooking(bookingObject);
//   alert("Clicked Cancel btn with ID: " + bookingId);
// });

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
