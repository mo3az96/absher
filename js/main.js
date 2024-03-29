$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  $(".top-news-dismiss").click(function (e) {
    $("body").addClass("fixPadding");
  });
  /* ~~~~~~~~~~~~~~~ Fixed ~~~~~~~~~~~~~~~ */
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
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
    loop: true,
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
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
   /* ~~~~~~~~~~~~~~~ Organizations Swiper ~~~~~~~~~~~~~~~ */
   var OrganizationsSwiper = new Swiper(".organizations-cont .swiper", {
    loop: true,
    pagination: {
      el: ".organizations-cont .swiper-pagination",
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
        spaceBetween: 30,
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
    $(".lang-btn").click(function () {
      $(".lang-list").slideToggle();
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
  /* ~~~~~~~~~~~~~~~ About FAQ ~~~~~~~~~~~~~~~ */
  $(".acc-head").click(function () {
    $(".acc-head").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
    $(".acc-head").not(this).siblings().slideUp(500);
  });

  /* ~~~~~~~~~~~~~~~ gallery Swiper ~~~~~~~~~~~~~~~ */
  var gallerySwiper = new Swiper(".gallery-slider .swiper", {
    loop: true,
    autoplay: {
      delay: 10000,
    },
    pagination: {
      el: ".gallery-slider .swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 15,
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /* ~~~~~~~~~~~~~~~ Related Swiper ~~~~~~~~~~~~~~~ */
  if ($(window).width() <= 991) {
    $(".swiper-wrapperr")
      .addClass("swiper-wrapper")
      .removeClass("swiper-wrapperr");
    var RelatedSwiper = new Swiper(".related-slider .swiper", {
      loop: true,
      pagination: {
        el: ".related-slider .swiper-pagination",
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
  }

  $(".btns button[data-target]").click(function (e) {
    e.preventDefault();
    var target = $(this).data("target");
    $('button[data-bs-target="' + target + '"]').trigger("click");
  });

  $("div.form-control .tags-input").keypress(function (e) {
    if (e.keyCode == 13) {
      var allTags = $(this).next("input").val();
      var tag = $(this).val();
      if (tag.length > 0) {
        $(this)
          .next("input")
          .val(allTags + ", " + tag);
        var delIcon =
          "<svg xmlns='http://www.w3.org/2000/svg' width='9.02' height='9.018' viewBox='0 0 9.02 9.018'>  <path id='Icon_ionic-ios-close' data-name='Icon ionic-ios-close' d='M16.864,15.8l3.222-3.222a.755.755,0,0,0-1.068-1.068L15.8,14.73l-3.222-3.222a.755.755,0,1,0-1.068,1.068L14.729,15.8l-3.222,3.222a.755.755,0,1,0,1.068,1.068L15.8,16.865l3.222,3.222a.755.755,0,0,0,1.068-1.068Z' transform='translate(-11.285 -11.289)' fill='#fff'/></svg>";
        $(this)
          .parent(".form-control")
          .prepend(
            "<span>" +
              tag +
              "<a role='button' onclick='$(this).parent().remove()'>" +
              delIcon +
              "</a></span>"
          );
        $(this).val("");
      }
    }
  });

  $(".input-file-cont input").change(function (e) {
    var file = $(".input-file")[0].files[0];
    $("#image-passport").html(
      `<img id="image" style="width: 100%;height: 100%; border-radius: 50%;">`
    );
    var output = document.getElementById("image");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
    $(".file-val").text(file.name);
  });

  var singleSwiper = new Swiper(".single-blog-slider .swiper", {
    pagination: {
      el: ".single-blog-slider .swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 15,
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
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

$(document).ready(function () {
  if ($(window).width() <= 991) {
    $(".float-whats img").click(function (e) {
      e.preventDefault();
    });
  }

  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 500,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });
});
