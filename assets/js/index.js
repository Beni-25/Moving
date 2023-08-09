$('.card-img-top').on('mouseenter', event => {
    $(event.currentTarget).addClass('card-img-top-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('card-img-top-active')
  })