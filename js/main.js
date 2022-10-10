$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /* ~~~~~~~~~~~~~~~ INIT ~~~~~~~~~~~~~~~ */
  lazyLoad();
  new WOW().init();
  if ($(window).width() > 992) {
    $("select.form-control").select2({
      minimumResultsForSearch: Infinity,
    });
  }

  /* ~~~~~~~~~~~~~~~ Consultants Swiper ~~~~~~~~~~~~~~~ */
  var ConsultantsSwiper = new Swiper(".consultants-slider .swiper", {
    loop: true,
    pagination: {
      el: ".consultants-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ Blog Swiper ~~~~~~~~~~~~~~~ */
  var BlogSwiper = new Swiper(".blog-slider .swiper", {
    loop: true,
    pagination: {
      el: ".blog-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ Partners Swiper ~~~~~~~~~~~~~~~ */
  var PartnersSwiper = new Swiper(".partners-cont .swiper", {
    // loop: true,
    pagination: {
      el: ".partners-cont .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
        spaceBetween: 20,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ Footer ~~~~~~~~~~~~~~~ */
  if ($(window).width() <= 767) {
    $(".footer-head").click(function () {
      $(".footer-head").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-head").not(this).siblings().slideUp(500);
    });
  }
  /* ~~~~~~~~~~~~~~~ Menu ~~~~~~~~~~~~~~~ */
  if ($(window).width() <= 1299) {
    $(".menu-btn").click(function () {
      $(".menu-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.menu-overlay").click(function () {
      $(".menu-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });
  }
  /* ~~~~~~~~~~~~~~~ States Counter ~~~~~~~~~~~~~~~ */
  if ($(".states-cont").length) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".states-cont").offset().top - 500
      ) {
        $(".state-number span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }
});

/* ~~~~~~~~~~~~~~~ Lazyload ~~~~~~~~~~~~~~~ */
function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
    img.parentElement.parentElement.classList.add("lazy-head-img");
  };
}
