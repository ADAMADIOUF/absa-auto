const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()
$(document).ready(function () {
  $('.my-car').slick({
    autoplay: true,
    dots: true,
    speed: 1000,
  })
})
