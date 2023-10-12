// Functions

function renderSummary() {
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
              <p class="card-text">
              ${summaryObject["textline4"]}
              </p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

  );
});
}

// IMPLEMENTING FUNCTIONS WHEN PAGE LOADS

$(document).ready(function () {


  

  //cards shadow increase on hover

$(".lpcard").hover(
  function() {
      $( this ).addClass( "shadow-lg" );
    }, function() {
      $( this ).removeClass( "shadow-lg" );
    }
  );


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

let selectedBooking = getSelectedBooking();
if(selectedBooking == null){
  alert("no booking selected, create a booking");
  window.location.href = "booking.html";

}else{
  console.log("booking found",selectedBooking);
  renderSummary(selectedBooking);
}

});
   