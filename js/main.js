const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
});
var mySwiper = new Swiper(".swiper-container", {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
