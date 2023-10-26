// FUNCTIONS
// slet bookingObject;

// let trackBtnId;
// let ModifyBtnId;
// let CancelBtnId;

// let trackBtnId = `track-btn-${bookingObject["id"]}`;
// let ModifyBtnId = `modify-btn-${bookingObject["id"]}`;
// let CancelBtnId = `cancel-btn-${bookingObject["id"]}`;

function trackBooking(bookingObjectId) {
  console.log("bookingObjectId", bookingObjectId);
  let booking = searchBooking(bookingObjectId);
  
 
  //go to track page
  if(booking !== null){
    console.log("booking found", booking)
    setNewSelectedBooking(booking);
    alert("booking found");

    window.location.href = "tracking.html";
  }else{
    alert("Please check the booking ID");
  }

}
function modifyBooking(bookingObject) {
  console.log("bookingObject", bookingObject);
  setNewSelectedBooking(newSelectedBooking);
  //go to modify page
  window.location.href = "modify.html";
}
function cancelBooking(bookingObject) {
  console.log("bookingObject", bookingObject);
  setNewSelectedBooking(newSelectedBooking);
  //go to cancelBooking function
  cancelBooking(newSelectedBooking);
}

function renderBookings(allBookings, loggedInUser) {
  allBookings.forEach((bookingObject) => {
    console.log("Creating card for booking: ", bookingObject);

    let trackBtnId = `track-btn-${bookingObject["id"]}`;
    let ModifyBtnId = `modify-btn-${bookingObject["id"]}`;
    let CancelBtnId = `cancel-btn-${bookingObject["id"]}`;

    

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
              id='${ModifyBtnId}'
              data-booking='${JSON.stringify(bookingObject)}'
            >
              Modify
            </button>
            <button
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              id='${CancelBtnId}'
              data-booking='${JSON.stringify(bookingObject)}'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>`);
    console.log(`#${trackBtnId}`);

    // $(trackBtnId).on("click", function () {
    // const trackButton = $(this);
    // const trackBtnId = trackButton.attr("id");
    // const bookingId = trackBtnId.replace("track-btn-", "");
    // const bookingObject = JSON.parse(trackButton.data("booking"));
    // console.log(bookingObject);
    // trackBooking(bookingObject);
    // console.log("Clicked Track btn with ID: " , bookingObject);
    // });
    // $(`#${trackBtnId}`).on("click", function () {
    //   alert("clicked track");
    //   trackBooking(`${bookingObject}`);
    // });
  });
}

// $("#list-of-bookings").on("click", '[id^="track-btn-"]', function () {
//   const trackButton = $(this);
//   const trackBtnId = trackButton.attr("id");
//   const bookingId = trackBtnId.replace("track-btn-", "");
//   // const bookingObject = JSON.parse(trackButton.data("booking"));
//   // console.log(bookingObject);
//   // trackBooking(bookingObject);
//   alert("Clicked Track btn with ID: " + bookingId);
// });

$("#list-of-bookings").on("click", '[id^="modify-btn-"]', function () {
  const modifyButton = $(this);
  const modifyBtnId = modifyButton.attr("id");
  const bookingId = modifyBtnId.replace("modify-btn-", "");
  // const bookingObject = JSON.parse(modifyButton.data("booking"));
  // console.log(bookingObject);
  // modifyBooking(bookingObject);
  alert("Clicked Modify btn with ID: " + bookingId);
});

$("#list-of-bookings").on("click", '[id^="cancel-btn-"]', function () {
  const cancelButton = $(this);
  const cancelBtnId = cancelButton.attr("id");
  const bookingId = cancelBtnId.replace("cancel-btn-", "");
  // const bookingObject = JSON.parse(cancelButton.data("booking"));
  // console.log(bookingObject);
  // cancelBooking(bookingObject);
  alert("Clicked Cancel btn with ID: " + bookingId);
});

// $(`#${trackBtnId}`).on("click", function () {
//   alert("clicked track");
//   // trackBooking(`${bookingObject}`);
// });
// $(`#${ModifyBtnId}`).on("click", function () {
//   alert("clicked modify");
//   // modifyBooking(`${bookingObject}`);
// });
// $(`#${CancelBtnId}`).on("click", function () {
//   alert("clicked cancel");
//   // cancelBooking(`${bookingObject}`);
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
