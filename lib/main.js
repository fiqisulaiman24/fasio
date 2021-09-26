'use strict';
// AOS Effect
AOS.init({
	once:true
})

// Navbar activation
$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

// Preloader (not used)
$(window).on('load', function () {
  $('.preloader').delay(1000).fadeOut('slow');
  $('body').delay(1000).css({
    'overflow': 'visible'
  });
});

// Sticky Navbar Effect
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll < 1){
    $('.navbar').css({"background": "transparent"});
  }else{
    $('.is-fixed-top').css({"background": "rgba(26, 54, 101, 1)", "transition": "0.3s all linear","color":"#000"});
  }
});

// Slick Carousel
$('.fasio__usp').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	autoplay:true,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      }
    }
  ]
});

//  Back to top button
$(document).ready(function() {
  // Show or hide the sticky footer button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
    });
    // Animate the scroll to top
    $('.go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    })
 });