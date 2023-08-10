//       $('a').on( 'keyup', function( e ) { 
//     if( e.which == 9 ) { 
//         console.log( e.target.href ); 
//     } 
// } );


// function getDate(){
//     const bdate= document.getElementById('date');
//     const today=new Date();
//     const formatteDate=today.getDate() + "-"
//     + (today.getMonth()+1)  + "-" 
//     + today.getFullYear(); 
//         bdate.value = formattedDate;
// }

document.addEventListener('DOMContentLoaded', function() {
        
    var bdate = document.getElementById('date');
    var today = new Date();
    var formattedDate = today.toISOString().split('T')[0];
    bdate.value = formattedDate;
  });


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


  //dropdown mouseleave event

  $(document).ready(()=>{
    $('.dropdown-menu').on('click',()=>{
        $('.dropdown-menu').toggle();
    })
    $('.dropdown-menu').on('mouseleave',()=>{
        $('.dropdown-menu').hide();
    })
  });