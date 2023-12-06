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
  autoplayTimeout: 5000,
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

let cursor = document.querySelector(".circular-div");
document.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    top: dets.y + 15,
    left: dets.x + 15,
  });
});

document.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 0,
    opacity: 0,
  });
});
document.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
  });
});

function textcontainerAnimate() {
  let tch1 = document.querySelector("#text-container h1");
  let tch4 = document.querySelector("#text-container h4");
  let tcbutton = document.querySelector("#text-container button");

  setInterval(() => {
    gsap.to(tch1, {
      y: "-550%",
      ease: "power2.inOut",
    });

    setTimeout(() => {
      gsap.to(tch1, {
        y: "0%",
        ease: "power2.inOut",
        duration: 2,
      });
    }, 200);
  }, 4900);

  setInterval(() => {
    gsap.to(tch4, {
      y: "-150%",
      ease: "power2.inOut",
    });

    setTimeout(() => {
      gsap.to(tch4, {
        y: "0%",
        ease: "power2.inOut",
        duration: 1,
      });
    }, 400);
  }, 4900);

  setInterval(() => {
    gsap.to(tcbutton, {
      y: "500%",
      ease: "power2.inOut",
    });

    setTimeout(() => {
      gsap.to(tcbutton, {
        y: "0%",
        ease: "power2.inOut",
        duration: 1,
      });
    }, 400);
  }, 4900);
}

textcontainerAnimate();

let prevCarousel = document.querySelector(".hero-carousel .owl-nav .owl-prev");
prevCarousel.addEventListener("click", () => {
  let tch1 = document.querySelector("#text-container h1");
  let tch4 = document.querySelector("#text-container h4");
  let tcbutton = document.querySelector("#text-container button");
  gsap.to(tch1, {
    y: "-550%",
    ease: "power2.inOut",
  });
  setTimeout(() => {
    gsap.to(tch1, {
      y: "0%",
      ease: "power2.inOut",
      duration: 2,
    });
  }, 200);
  gsap.to(tch4, {
    y: "-150%",
    ease: "power2.inOut",
  });
  setTimeout(() => {
    gsap.to(tch4, {
      y: "0%",
      ease: "power2.inOut",
      duration: 1,
    });
  }, 400);
  gsap.to(tcbutton, {
    y: "500%",
    ease: "power2.inOut",
  });
  setTimeout(() => {
    gsap.to(tcbutton, {
      y: "0%",
      ease: "power2.inOut",
      duration: 1,
    });
  }, 400);
});

let nextCarousel = document.querySelector(".hero-carousel .owl-nav .owl-next");
nextCarousel.addEventListener("click", () => {
  let tch1 = document.querySelector("#text-container h1");
  let tch4 = document.querySelector("#text-container h4");
  let tcbutton = document.querySelector("#text-container button");
  gsap.to(tch1, {
    y: "-550%",
    ease: "power2.inOut",
  });
  setTimeout(() => {
    gsap.to(tch1, {
      y: "0%",
      ease: "power2.inOut",
      duration: 2,
    });
  }, 200);
  gsap.to(tch4, {
    y: "-150%",
    ease: "power2.inOut",
  });
  setTimeout(() => {
    gsap.to(tch4, {
      y: "0%",
      ease: "power2.inOut",
      duration: 1,
    });
  }, 400);
  gsap.to(tcbutton, {
    y: "500%",
    ease: "power2.inOut",
  });
  setTimeout(() => {
    gsap.to(tcbutton, {
      y: "0%",
      ease: "power2.inOut",
      duration: 1,
    });
  }, 400);
});