// $(".card-img-top")
//   .on("mouseenter", (event) => {
//     $(event.currentTarget).addClass("card-img-top-active");
//   })
//   .on("mouseleave", (event) => {
//     $(event.currentTarget).removeClass("card-img-top-active");
//   });

// $(".lpcard").hover(
//     (event)=>{
//         console.log("hover", event, this);
//         $(event.target).removeClass("shadow");
//         $(event.target).addClass("shadow-lg");
//     },
//     (event)=>{
//         console.log("hover", event, this);
//         $(event.target).removeClass("shadow-lg");
//         // $(event.target).addClass("shadow");
//     }
// );

$(".lpcard").hover(
    function() {
        $( this ).addClass( "shadow-lg" );
      }, function() {
        $( this ).removeClass( "shadow-lg" );
      }
    );