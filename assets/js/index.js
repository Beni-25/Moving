// Functions

function renderCarousel() {
  carouselList.forEach((carouselObject) => {
    console.log("Creating carousel for index: ", carouselObject);
    $(".list-carousel")
      .append(`<div class="carousel-item ${carouselObject["imageclass"]}" data-bs-interval="3000">
      <div class="carousel-caption">
        <h1 class="carousel-title">AB MOVERS</h1>
        <p class="carousel-subtitle">Contact : +1 (709) 769 4450</p>
      </div>
    </div>`);
  });
}

function renderCard() {
  cardList.forEach((cardObject) => {
    console.log("Creating cards for index: ", cardObject);
    $(".list-card").append(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="lpcard card h-100 shadow">
        <img
          src="assets/css/images/${cardObject["image"]}"
          width="250px"
          height="250px"
          class="card-img-top"
          alt="${cardObject["imagename"]}"
        />
        <div class="card-body">
          <h5 class="card-title text-center">${cardObject["title"]}</h5>
          <p class="card-text">
          ${cardObject["cardtext"]}
          </p>
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

  renderCarousel();
  renderCard();

  let loggedinUser = localStorage.getItem(window.LOGGEDIN_USER_KEY); // getting value from localStorage(ie, {username:"1", password:"2",...}) or null
  console.log(loggedinUser);
  if (loggedinUser != null) {
    $("#signIn").hide(); // Jquery hide the login
    $("#signOut").show(); // Jquery show the logout
  } else {
    $("#signIn").show(); // Jquery show the login
    $("#signOut").hide(); // Jquery hide the logout
  }

  //cards shadow increase on hover
  $(".lpcard").hover(
    function () {
      $(this).addClass("shadow-lg");
    },
    function () {
      $(this).removeClass("shadow-lg");
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
});
