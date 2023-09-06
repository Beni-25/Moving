//Parsley Multistep Form

$(function () {
    var $sections = $(".form-section");

    function navigateTo(index) {
      // Mark the current section with the class 'current'
      $sections.removeClass("current").eq(index).addClass("current");
      // Show only the navigation buttons that make sense for the current section:
      $(".form-navigation .previous").toggle(index > 0);
      var atTheEnd = index >= $sections.length - 1;
      $(".form-navigation .next").toggle(!atTheEnd);
      $(".form-navigation [type=submit]").toggle(atTheEnd);
    }

    function curIndex() {
      // Return the current index by looking at which section has the class 'current'
      return $sections.index($sections.filter(".current"));
    }

    // Previous button is easy, just go back
    $(".form-navigation .previous").click(function () {
      navigateTo(curIndex() - 1);
    });

    // Next button goes forward iff current block validates
    $(".form-navigation .next").click(function () {
      $(".booking-form")
        .parsley()
        .whenValidate({
          group: "block-" + curIndex(),
        })
        .done(function () {
          navigateTo(curIndex() + 1);
        });
    });

    // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
    $sections.each(function (index, section) {
      $(section)
        .find(":input")
        .attr("data-parsley-group", "block-" + index);
    });
    navigateTo(0); // Start at the beginning
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