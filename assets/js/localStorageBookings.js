function saveDetails(
  date,
  time,
  P_address1,
  P_address2,
  P_city,
  P_province,
  P_zipcode,
  D_address1,
  D_address2,
  D_city,
  D_province,
  D_zipcode,
  distance,
  load,
  instructions,
  parking,
  stairs,
  notification
) {
  try {
    // entering inside try to check whether code is executing properly, if not it will go to catch block
    let allBookings =
      JSON.parse(localStorage.getItem(window.BOOKINGS_KEY)) || []; // check whether any existing bookings there or not
    let loggedInUser = JSON.parse(
      localStorage.getItem(window.LOGGEDIN_USER_KEY)
    );
    console.log(loggedInUser, "loggedInUser");
    let loggedInUsername = loggedInUser["username"];
    console.log(loggedInUsername, "loggedInUsername");
    if (loggedInUsername == null) {
      alert("username not exists");
      return;
    }
    let bookingID = loggedInUsername + "-" + date + "-" + time;
    // Create a booking object
    const booking = {
      id: bookingID,
      date: date,
      time: time,
      P_address1: P_address1,
      P_address2: P_address2,
      P_city: P_city,
      P_province: P_province,
      P_zipcode: P_zipcode,
      D_address1: D_address1,
      D_address2: D_address2,
      D_city: D_city,
      D_province: D_province,
      D_zipcode: D_zipcode,
      distance: distance,
      load: load,
      instructions: instructions,
      parking: parking,
      stairs: stairs,
      notification: notification,
    };

    allBookings.push(booking); //push the object ie, {date:"1", time:"2",....} to allBookings
    localStorage.setItem(window.BOOKINGS_KEY, JSON.stringify(allBookings)); // Set the updated current booking in the localStorage
    localStorage.setItem(window.SELECTED_BOOKING_KEY, JSON.stringify(booking));
    return true;
  } catch {
    // if try block not executed or any error in setting in localStorage shows error in catch block
    console.log("Error saving details in the booking form ");
    return false;
  }
}

function getSelectedBooking() {
  let selectedBooking = localStorage.getItem(window.SELECTED_BOOKING_KEY);
  if (selectedBooking == null || selectedBooking == "") {
    return null;
  } else {
    return JSON.parse(selectedBooking);
  }
}

function saveModifiedDetails(
  id,
  date,
  time,
  P_address1,
  P_address2,
  P_city,
  P_province,
  P_zipcode,
  D_address1,
  D_address2,
  D_city,
  D_province,
  D_zipcode,
  distance,
  load,
  instructions,
  parking,
  stairs,
  notification
) {
  try {
    // entering inside try to check whether code is executing properly, if not it will go to catch block
    let allBookings =
      JSON.parse(localStorage.getItem(window.BOOKINGS_KEY)) || []; // check whether any existing bookings there or not
    console.log("allBookings|saveModifiedDetails", allBookings);
    let selectedBooking = getSelectedBooking();
    let allBookingsWithoutSelected = allBookings.filter(function (b) {
      return b["id"] != selectedBooking["id"];
    });
    console.log(
      "allBookingsWithoutSelected|saveModifiedDetails",
      allBookingsWithoutSelected
    );
    // Create a booking object
    const newBooking = {
      id: id,
      date: date,
      time: time,
      P_address1: P_address1,
      P_address2: P_address2,
      P_city: P_city,
      P_province: P_province,
      P_zipcode: P_zipcode,
      D_address1: D_address1,
      D_address2: D_address2,
      D_city: D_city,
      D_province: D_province,
      D_zipcode: D_zipcode,
      distance: distance,
      load: load,
      instructions: instructions,
      parking: parking,
      stairs: stairs,
      notification: notification,
    };

    allBookingsWithoutSelected.push(newBooking); //push the object ie, {date:"1", time:"2",....} to allBookings
    localStorage.setItem(
      window.BOOKINGS_KEY,
      JSON.stringify(allBookingsWithoutSelected)
    ); // Set the updated current booking in the localStorage
    localStorage.setItem(
      window.SELECTED_BOOKING_KEY,
      JSON.stringify(newBooking)
    );
    return true;
  } catch {
    // if try block not executed or any error in setting in localStorage shows error in catch block
    console.log("Error saving details in the modify booking form ");
    return false;
  }
}

function setNewSelectedBooking(newSelectedBooking) {
  // alert("set Booking");
  console.log("bookingObject", newSelectedBooking);
  localStorage.setItem(
    window.SELECTED_BOOKING_KEY,
    JSON.stringify(newSelectedBooking)
  );
}

function cancelBookingUsingId(bookingObjectId) {
  // let selectedBooking =newSelectedBooking;
  let allBookings = JSON.parse(localStorage.getItem(window.BOOKINGS_KEY)); //
  let allBookingsWithoutSelected = allBookings.filter(function (b) {
    return b["id"] != bookingObjectId;
  });
  localStorage.setItem(
    window.BOOKINGS_KEY,
    JSON.stringify(allBookingsWithoutSelected)
  );
}

function searchBooking(bookingId) {
  console.log("Get Booking");
  let allBookings = localStorage.getItem(window.BOOKINGS_KEY); // [ {username: "1", password: "2"..}, {username: "3", password: "4"..} ] or []
  if (allBookings == null || allBookings == "") {
    //if allUsers is null or empty
    return null; //return null to saveUser function
  } else {
    //if allUsers has any values
    allBookings = JSON.parse(allBookings); //get the Javascript object from string in allUsers ie,'[{username: "1", password: "2"..}]' to {username: "1", password: "2"..}
    console.log("Listing all bookings", allBookings);
    for (const booking of allBookings) {
      // forEach will execute each set one by one; even if it found the same username it will execute the next object
      if (booking["id"] === bookingId) {
        //in this for loop, we need to stop and return the user as soon as same username found
        console.log("booking found", booking);
        return booking;
      }
    }
    console.log("booking not found");
    return null;
  }
}
