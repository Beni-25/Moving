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

   cancelBookingUsingId(bookingObjectId);
 
  }
  // Refresh the page
  location.reload(); // This will refresh the current page
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


// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {

  $("#signOut").click(function (event) {
    console.log("signout clicked");
    event.preventDefault(); // Prevent the default behavior of the button (eg., form submission)
    localStorage.removeItem(window.LOGGEDIN_USER_KEY); // delete the content inside LOGGEDIN_USER in local storage
    window.location.href = "login.html"; // Redirect to the Sign-in page
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

  let userBookings =  loggedInUserBookings(loggedInUser["username"]);

  // let allBookings = JSON.parse(localStorage.getItem(window.BOOKINGS_KEY));
  // if (allBookings == null) {
  //   alert("no bookings found, create a booking");
  //   window.location.href = "booking.html";
  // } else {
  //   console.log("bookings found", allBookings);
  //   renderBookings(allBookings, loggedInUser);
  // }


  let allLoggedInUserBookings = JSON.parse(localStorage.getItem(window.LOGGEDINUSER_BOOKINGS_KEY));

  $("#search").on("change", function() {
    alert("changed");
    const searchText = $(this).val().trim();
    if (searchText) {
      const searchArray = allLoggedInUserBookings.filter(function (b) {
        return b["id"] === searchText;
      });
  
      console.log(searchArray, "searchArray");
      renderBookings(searchArray, loggedInUser);
      
    } else {
      console.log("Using allLoggedInUserBookings");
      renderBookings(allLoggedInUserBookings, loggedInUser);
    }
   })
 
 
  if (allLoggedInUserBookings == null) {
    alert("no bookings found, create a booking");
    window.location.href = "booking.html";
  } else {
    console.log("bookings found", allLoggedInUserBookings);
    renderBookings(allLoggedInUserBookings, loggedInUser);
  }


});
