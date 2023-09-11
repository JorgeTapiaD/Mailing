import Swiper from "../../node_modules/swiper/swiper-bundle.min.mjs";

new Swiper('.swiper',{
  direction: "horizontal",
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    typeof: "bullets",
    clickable: true
    
  }
});

document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});


