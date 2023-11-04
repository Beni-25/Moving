// FUNCTIONS

function trackBooking(bookingObjectId) {
  let booking = searchBooking(bookingObjectId);
  if (booking !== null) {
    console.log("booking found", booking);
    setNewSelectedBooking(booking);
    window.location.href = "tracking.html";
  } else {
    alert("Error tracking the booking with this booking ID");
  }
}

function modifyBooking(bookingObjectId) {
  let booking = searchBooking(bookingObjectId);
  if (booking !== null) {
    console.log("booking found", booking);
    setNewSelectedBooking(booking);
    window.location.href = "modify.html";
  } else {
    alert("Error in modifying, Please check the booking ID");
  }
}

function cancelBooking(bookingObjectId) {
  // Confirm with the user before canceling the booking
  if (window.confirm("Are you sure you want to cancel this booking?")) {
    cancelBookingUsingId(bookingObjectId);
  }
  // Refresh the page
  location.reload();
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
  let allBookings = JSON.parse(localStorage.getItem(window.BOOKINGS_KEY));

  if (loggedInUser !== null) {
    let userName = loggedInUser["username"];
    let allUserBookings = allLoggedInUserBookings(userName);
    if(allUserBookings !== null){
      renderBookings(allUserBookings, loggedInUser);
    }else{
      alert("no bookings found, create a booking");
      window.location.href = "booking.html";
    }
     } else {
    console.log("No User Logged in, please sign in");
    window.location.href = "login.html";
  }

  $("#search").on("change", function () {
    const searchText = $(this).val().trim();
    if (searchText) {
      const searchArray = searchBookingUsingId(searchText);
      if (searchArray.length > 0) {
        $("div#list-of-bookings").html("");
        renderBookings(searchArray, loggedInUser);
      } else {
        alert("No bookings found");
      }
    } else {
      console.log("Using allLoggedInUserBookings");
    }
  });

  function allLoggedInUserBookings(userName) {
    let loggedInUserBookings = allBookings.filter(function (b) {
      return b["id"].includes(userName);
    });
    return loggedInUserBookings;
  }

  function searchBookingUsingId(searchText) {
    const searchArray = allBookings.filter(function (b) {
      let idName = b["id"].toLowerCase();
      let searchInput = searchText.toLowerCase();
      return idName.includes(searchInput);
    });
    return searchArray;
  }
});
