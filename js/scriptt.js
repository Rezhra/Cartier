document.getElementById("bl").addEventListener("click", function () {
  let tlearn = document.getElementById("tlearn");
  let tbrand = document.getElementById("tbrand");
  tlearn.style.display = "none";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.3,
  spaceBetween: 7,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperr = new Swiperr(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
