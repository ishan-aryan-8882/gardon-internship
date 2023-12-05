$(".hero-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  items: 1,
  nav: true,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
  navText: [
    "<i class='fa fa-long-arrow-left'></i>",
    "<i class='fa fa-long-arrow-right'></i>",
  ],
  autoplayTimeout: 2000, // Adjust the timeout as needed
});

$(document).ready(function () {
  function changeImgSrc() {
    var image = $("#myimage");
    if ($(window).width() < 770) {
      image.attr("src", "assets/img/square-cut.png");
    } else {
      image.attr("src", "assets/img/complete-white-part-logo.png");
    }
  }

  $(window).on("load resize", changeImgSrc);
});

let burgerMenu = document.querySelector(".fa-grip-lines");
let sideMenu = document.querySelector(".nav-show-on-small-screen");
let cross = document.querySelector(".closing-cross");

burgerMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("small-nav-show-right");
});

cross.addEventListener("click", () => {
  sideMenu.classList.remove("small-nav-show-right");
});
