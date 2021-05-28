const sliderBig = new Swiper('#sliderBig', {
  on: {
    init: function () {
      console.log('sliderBig initialized');
    },
  },
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  allowTouchMove: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    1080: {
      autoplay: false,
    },
  }
});

const sliderSmall = new Swiper('#sliderSmall', {
  on: {
    init: function () {
      console.log('sliderSmall initialized');
    },
  },
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  allowTouchMove: false,
});

// sliderSmall.on('slideChange', function () {
//   console.log('slide changed');
// });

const prevSlide = document.querySelector(".btn-prev-slide");
const nextSlide = document.querySelector(".btn-next-slide");

prevSlide.addEventListener("click", function () {
  sliderSmall.slidePrev();
  sliderBig.slidePrev();
});

nextSlide.addEventListener("click", function () {
  sliderSmall.slideNext();
  sliderBig.slideNext();
});