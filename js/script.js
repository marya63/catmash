"use strict"
$(document).ready(function () {
  $('.image1').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       // autoplay: true,
       // autoplaySpeed: 5000,
       arrows: false,
       infinite: true,
       dots: true,
       dotsClass: 'image1__dots'
  });

   $(".line").lightGallery();
});