$(document).ready(function () {
  // HERO SLIDER
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    navText: ["prev", "next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // PROJECT SLIDER
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    margin: 24,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },

      1140: {
        items: 2,
        center: true,
        //  dots:true,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 3000,
  });
});
