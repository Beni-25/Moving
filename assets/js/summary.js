// Functions

function renderSummary(selectedBooking) {
  console.log("selectedBooking", selectedBooking);

  let summaryList = createSummaryList(selectedBooking);
  console.log("summaryList", summaryList);
  summaryList.forEach((summaryObject) => {
    console.log("Creating card for summary: ", summaryObject);
    $("#list-summary").append(`
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="p-3">
    <div class="card mb-3 ${summaryObject["container"]} lpcard" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src=${summaryObject["image"]}
              class="img-fluid rounded-start"
              alt=${summaryObject["imagename"]}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${summaryObject["title"]}</h5>
              <p class="card-text">
              ${summaryObject["textline1"]}
              </p>
              <p class="card-text">
              ${summaryObject["textline2"]}
              </p>
              <p class="card-text">
              ${summaryObject["textline3"]}
              </p>              
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  });
}

function createSummaryList(selectedBooking) {
  let summaryList = [
    {
      container: "container-booking",
      image: "/assets/css/images/booking.png",
      title: "Booking Details",
      imagename: "Booking icon",
      textline1: "BOOKING ID: " + selectedBooking["id"],
      textline2: "DATE: " + selectedBooking["date"],
      textline3: "TIME: " + selectedBooking["time"],
    },
    {
      container: "container-location",
      image: "/assets/css/images/location.png",
      title: "Location Details",
      imagename: "Location icon",
      textline1:
        "<strong>PICKUP LOCATION: </strong>" +
        selectedBooking["P_address1"] +
        selectedBooking["P_address2"] +
        "," +
        selectedBooking["P_city"] +
        "," +
        selectedBooking["P_province"] +
        "," +
        selectedBooking["P_zipcode"],
      textline2:
        "<strong>DROP LOCATION: </strong>" +
        selectedBooking["D_address1"] +
        selectedBooking["D_address2"] +
        "," +
        selectedBooking["D_city"] +
        "," +
        selectedBooking["D_province"] +
        "," +
        selectedBooking["D_zipcode"],
      textline3: "LOAD SIZE: " + selectedBooking["load"],
    },
    {
      container: "container-estimation",
      image: "/assets/css/images/estimation.png",
      title: "Estimation Details",
      imagename: "Estimation icon",
      textline1: "TOTAL DISTANCE IN KILOMETERS: " + selectedBooking["distance"],
      textline2: "TOTAL ESTIMATED TIME IN MINS: 2hrs/bhk (approx)",
      textline3: "ESTIMATED PRIZE: 90 CAD/hr (approx)",
    },
    {
      container: "container-details",
      image: "/assets/css/images/info.png",
      title: "Additional Details",
      imagename: "Additional Info icon",
      textline1:
        "ARE THERE ANY PARKING CHALLENGES? " + selectedBooking["parking"],
      textline2:
        "DO YOU HAVE ANY STAIRS/STEPS IN THE LOCATION? " +
        selectedBooking["stairs"],
      textline3: "INSTRUCTIONS: " + selectedBooking["instructions"],
    },
  ];
  return summaryList;
}

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {
  //cards shadow increase on hover
  $(".lpcard").hover(
    function () {
      $(this).addClass("shadow-lg");
    },
    function () {
      $(this).removeClass("shadow-lg");
    }
  );

  let loggedInUser = getLoggedInUser();
  if (loggedInUser !== null) {
    $("#name").text("NAME: " + loggedInUser["username"]);
    $("#phone").text("PHONE NUMBER: " + loggedInUser["phone"]);
    $("#email").text("EMAIL ADDRESS: " + loggedInUser["email"]);
  } else {
    console.log("No User Logged in, please sign in");
    window.location.href = "login.html";
  }
  let selectedBooking = getSelectedBooking();
  if (selectedBooking == null) {
    console.log("no bookings selected, create a booking");
    window.location.href = "booking.html";
  } else {
    console.log("booking found", selectedBooking);
    renderSummary(selectedBooking);
  }
});
