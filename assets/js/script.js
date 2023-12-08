$(document).ready(function () {
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

  function changeImgSrc() {
    var image = $("#myimage");
    if ($(window).width() < 770) {
      image.attr("src", "assets/img/square-cut.png");
    } else {
      image.attr("src", "assets/img/complete-white-part-logo.png");
    }
  }

  $(window).on("load resize", changeImgSrc);

  let burgerMenu = $(".fa-grip-lines");
  let sideMenu = $(".nav-show-on-small-screen");
  let cross = $(".closing-cross");

  burgerMenu.on("click", function () {
    sideMenu.toggleClass("small-nav-show-right");
  });

  cross.on("click", function () {
    sideMenu.removeClass("small-nav-show-right");
  });

  let cursor = $(".circular-div");
  $(document).on("mousemove", function (e) {
    gsap.to(cursor, {
      top: e.clientY + 15,
      left: e.clientX + 15,
    });
  });

  $(document).on("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });

  $(document).on("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  function textcontainerAnimate() {
    let tch1 = $("#text-container h1");
    let tch4 = $("#text-container h4");
    let tcbutton = $("#text-container button");

    let intervalId1 = setInterval(function () {
      gsap.to(tch1, {
        y: "-550%",
        opacity: 0,
        ease: "power2.inOut",
      });

      setTimeout(function () {
        gsap.to(tch1, {
          y: "0%",
          opacity: 1,
          ease: "power2.inOut",
          duration: 2,
        });
      }, 200);
    }, 4900);

    let intervalId2 = setInterval(function () {
      gsap.to(tch4, {
        y: "-150%",
        opacity: 0,
        ease: "power2.inOut",
      });

      setTimeout(function () {
        gsap.to(tch4, {
          y: "0%",
          opacity: 1,
          ease: "power2.inOut",
          duration: 1,
        });
      }, 900);
    }, 4900);

    let intervalId3 = setInterval(function () {
      gsap.to(tcbutton, {
        y: "500%",
        ease: "power2.inOut",
      });

      setTimeout(function () {
        gsap.to(tcbutton, {
          y: "0%",
          ease: "power2.inOut",
          duration: 1,
        });
      }, 400);
    }, 4900);

    return [intervalId1, intervalId2, intervalId3];
  }

  let intervalIds = textcontainerAnimate();

  let prevCarousel = $(".hero-carousel .owl-nav .owl-prev");
  prevCarousel.on("click", function () {
    intervalIds.forEach(clearInterval);
    let tch1 = $("#text-container h1");
    let tch4 = $("#text-container h4");
    let tcbutton = $("#text-container button");
    gsap.to(tch1, {
      y: "-550%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch1, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 2,
      });
    }, 200);
    gsap.to(tch4, {
      y: "-150%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch4, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
    }, 900);
    gsap.to(tcbutton, {
      y: "500%",
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tcbutton, {
        y: "0%",
        ease: "power2.inOut",
        duration: 1,
      });
    }, 400);
  });

  let nextCarousel = $(".hero-carousel .owl-nav .owl-next");
  nextCarousel.on("click", function () {
    intervalIds.forEach(clearInterval);
    let tch1 = $("#text-container h1");
    let tch4 = $("#text-container h4");
    let tcbutton = $("#text-container button");
    gsap.to(tch1, {
      y: "-550%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch1, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 2,
      });
    }, 200);
    gsap.to(tch4, {
      y: "-150%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch4, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
    }, 900);
    gsap.to(tcbutton, {
      y: "500%",
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tcbutton, {
        y: "0%",
        ease: "power2.inOut",
        duration: 1,
      });
    }, 400);
  });

  $(window).on("scroll", function () {
    let page1 = $(".page1");
    let navUpperPart = $("nav-upper-part");
    let navLowerPart = $("nav-lower-part");
    let nav = $("nav");
    let rect1 = page1[0].getBoundingClientRect();
    if (rect1.top <= 100) {
      navUpperPart.css("display", "none");
      navLowerPart.css("borderRadius", "6px");
      nav.css("top", "-20px");
      gsap.to(nav, {
        top: "0",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      navUpperPart.css("display", "flex");
      navLowerPart.css("borderRadius", "0px");
      navLowerPart.css("borderBottomLeftRadius", "6px");
      navLowerPart.css("borderBottomRightRadius", "6px");
      gsap.to(nav, {
        top: "20",
        duration: 0.1,
        ease: "power2.inOut",
      });
    }
  });

  let animationsTriggered = false;

  $(window).on("scroll", function () {
    let page2 = $(".page2");
    let rect2 = page2[0].getBoundingClientRect();
    let windowHeight = $(window).height();
    if (rect2.top < windowHeight * 0.5 && !animationsTriggered) {
      let gardenwomen = $("#women-garden");
      let greenBoxIcon = $(".green-icon-box");

      gsap.to(gardenwomen, {
        x: "0",
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });

      greenBoxIcon.each((index, element) => {
        setTimeout(() => {
          gsap.to(element, {
            y: "0",
            opacity: "1",
            duration: 1,
          });
        }, index * 500);
      });
      animationsTriggered = true;
      setTimeout(() => {
        gardenwomen.css("opacity", "1");
      }, 2000);
    }
  });

  $(".services").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navContainer: ".page3-contents",
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".review").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    responsive: {
      758: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".projects").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
  });

  $(document).ready(function () {
    $(".projects .item:even").addClass("even-item");
  });

  $(document).ready(function () {
    $(".projects .item:odd").addClass("odd-item");
  });

  function updateBrInH2p6() {
    var windowWidth = $(window).width();
    var thresholdWidth = 678; // Adjust as needed

    if (windowWidth <= thresholdWidth) {
      // Remove <br> from the h2 element
      $(".projects-text h2 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page6 .projects-text h2.incredible").html(
        "Enjoy our incredible recently <br> completed projects"
      );
    }
  }
  updateBrInH2p6();
  $(window).resize(updateBrInH2p6);

  function updateBrInH2p3() {
    var windowWidth = $(window).width();
    var thresholdWidth = 688; // Adjust as needed

    if (windowWidth <= thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page3 .page3-contents .top-part-text h2 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page3 .page3-contents .top-part-text h2").html(
        "Services were provding to <br> our customers"
      );
    }
  }
  updateBrInH2p3();
  $(window).resize(updateBrInH2p3);

  function updateBrInH2p1() {
    var windowWidth = $(window).width();
    var thresholdWidth = 437; // Adjust as needed

    if (windowWidth <= thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page1 #text-container h1 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page1 #text-container h1").html("Make dream <br> gardening");
    }
  }
  updateBrInH2p1();
  $(window).resize(updateBrInH2p1);

  $(".gallery-images").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  let eyeforflipdiv = $(".page6 .projects .item .flip-div .fa-eye");
  let hiddencarousel = $(".page6 .img-gallery");
  let hidehiddencarousel = $(".page6 .img-gallery .gallery-close span");
  eyeforflipdiv.on("click", () => {
    hiddencarousel.css("display", "flex");
  });
  hidehiddencarousel.on("click", () => {
    hiddencarousel.css("display", "none");
    $('.page1, .page2, .page3, .page4, .page5, .page6, .page7, .projects, .projects-text ').css('opacity', '1');
  });

  $(document).ready(function() {
    $('.fa-eye').on('click', function() {
      // Reduce the opacity of all pages
      $('.page1, .page2, .page3, .page4, .page5, .page6, .page7, .projects, .projects-text').css('opacity', '0.1');
      $('.page6').css('opacity', '1');
    });
  });

  // this is the ending parenthesis
});
