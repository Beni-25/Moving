$(".lpcard").hover(
    function() {
        $( this ).addClass( "shadow-lg" );
      }, function() {
        $( this ).removeClass( "shadow-lg" );
      }
    );

    $('.bi-facebook').on('mouseenter', ()=>{
      $('.bi-facebook').addClass('bi-active');
  })
  $('.bi-facebook').on('mouseleave', ()=>{
      $('.bi-facebook').removeClass('bi-active');
  })
  
  $('.bi-envelope').on('mouseenter', ()=>{
      $('.bi-envelope').addClass('bi-active');
  })
  $('.bi-envelope').on('mouseleave', ()=>{
      $('.bi-envelope').removeClass('bi-active');
  })
  
  $('.bi-linkedin').on('mouseenter', ()=>{
      $('.bi-linkedin').addClass('bi-active');
  })
  $('.bi-linkedin').on('mouseleave', ()=>{
      $('.bi-linkedin').removeClass('bi-active');
  })
  $('.bi-instagram').on('mouseenter', ()=>{
      $('.bi-instagram').addClass('bi-active');
  })
  $('.bi-instagram').on('mouseleave', ()=>{
      $('.bi-instagram').removeClass('bi-active');
  })