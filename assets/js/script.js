$(".hero-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    autoplay: true,
    autoplayTimeout: 2000, // Adjust the timeout as needed
  });
  