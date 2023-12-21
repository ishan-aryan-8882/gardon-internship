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
    $("body").toggleClass("no-scroll");
  });
  cross.on("click", function () {
    sideMenu.removeClass("small-nav-show-right");
    $("body").removeClass("no-scroll");
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
      ease: "power2.inOut",
    });
  });

  $(document).on("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1.2,
      opacity: 1,
      ease: "power2.inOut",
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

  // nav on pages
  // home page
  $(window).on("scroll", function () {
    let page1 = $(".page1");
    let nav = $(".page1 nav");
    let rect1 = page1[0].getBoundingClientRect();
    
    if (rect1.top <= -20) {
      gsap.to(nav, {
        top: -50,
        duration: 0.3,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(nav, {
        top: 20,
        duration: 0.3,
        ease: "power4.inOut",
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
    // autoplayTimeout: 2000,
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
    autoplay: true,
    // autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  function updateBrInH2p10() {
    var windowWidth = $(window).width();
    var thresholdWidth = 700; // Adjust as needed

    if (windowWidth < thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page10 .contact-text h2 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page10 .contact-text h2 ").html(
        "Get a free estimate for <br>your garden"
      );
    }
  }
  updateBrInH2p10();
  $(window).resize(updateBrInH2p10);

  function updateBrInPp10() {
    var windowWidth = $(window).width();
    var thresholdWidth = 700; // Adjust as needed

    if (windowWidth < thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page10 .contact-text p br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page10 .contact-text p ").html(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore magna aliqua."
      );
    }
  }
  updateBrInPp10();
  $(window).resize(updateBrInPp10);

  $(".page11-cont").owlCarousel({
    loop: true,
    margin: 120,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      756: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  function handleHover(classPrefix) {
    $(`.img-inner.${classPrefix}`).mouseover(() => {
      $(`.img-outer-abs-text__hover.${classPrefix}`).removeClass("displaynone");
      $(`.img-outer-abs-text.${classPrefix}`).addClass("displaynone");
    });

    $(`.img-inner.${classPrefix}`).mouseleave(() => {
      $(`.img-outer-abs-text__hover.${classPrefix}`).addClass("displaynone");
      $(`.img-outer-abs-text.${classPrefix}`).removeClass("displaynone");
    });
  }

  handleHover("uno");
  handleHover("dos");
  handleHover("tres");

  function updateBrInAp12() {
    var windowWidth = $(window).width();
    var thresholdWidth = 380; // Adjust as needed

    if (windowWidth < thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page12 .stl .full-white a br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page12 .stl .full-white a ").html(
        "Best ways to light up <br> your garden walkways"
      );
    }
  }
  updateBrInAp12();
  $(window).resize(updateBrInAp12);

  function updateBrInPp12() {
    var windowWidth = $(window).width();
    var thresholdWidth = 382;

    if (windowWidth <= thresholdWidth) {
      $(".page12 .stl .full-white p br").remove();
    } else {
      $(".page12 .stl .full-white p").html(
        "Lorem ipsum dolor sit amet consect <br>etru adi piscing elit"
      );
    }
  }
  updateBrInPp12();
  $(window).resize(updateBrInPp12);

  function setHoverWidth() {
    var stlWidth = $(".img-outer-abs-text__hover").width();
    $(".img-outer-abs-text__hover button").width(stlWidth - 80);
  }
  setHoverWidth();
  $(window).resize(function () {
    setHoverWidth();
  });

  function setSliderWidth() {
    var sliderwidth = $(".slide-cont").height();
    $(".page7").css("marginTop", sliderwidth);
  }
  setSliderWidth();
  $(window).resize(function () {
    setSliderWidth();
  });

  function updateBrInAppp2() {
    var windowWidth = $(window).width();
    var thresholdWidth = 1201;
    if (windowWidth < thresholdWidth) {
      $(".page2.about-page p.gray-lorem br").remove();
    } else {
      $(".page2.about-page p.gray-lorem").html(
        "Lorem ipsum dolor sit am adipi we help you ensure everyone is in <br>the right jobs sicing elit, sed do consulting firms Et leggings across <br>the nation tempor."
      );
    }
  }
  updateBrInAppp2();
  $(window).resize(updateBrInAppp2);


  function updateBrInAph1p2() {
    var windowWidth = $(window).width();
    var thresholdWidth = 769;
    if (windowWidth < thresholdWidth) {
      $(".page2.about-page h1 br").remove();
    } else {
      $(".page2.about-page h1").html(
        "Providing the quality <br> gardening services"
      );
    }
  }
  updateBrInAph1p2();
  $(window).resize(updateBrInAph1p2);

  // this is the ending parenthesis
});
