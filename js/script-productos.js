var swiper = new Swiper(".swiper-productos", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 15,
  // slidesPerGroupAuto: true,

  direction: "horizontal",
  loop: true,
  speed: 2500,
  // allowTouchMove: true,
  // effect: "cube",
  autoplay: {
    
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar"
    clickable: false,
    //dynamicBullets: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
  // },
});