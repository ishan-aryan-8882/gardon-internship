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
  
  function changeImgSrc() {
    var image = document.querySelector("#myimage");
    if (window.innerWidth < 770) {
      image.src = "assets/img/square-cut.png";
    } else {
      image.src = "assets/img/complete-white-part-logo.png";
    }
  }
  
  window.addEventListener("load", changeImgSrc);
  window.addEventListener("resize", changeImgSrc);
  