// Add loader before page load
window.addEventListener('load',()=>{
  document.querySelector(".loader").style.visibility ='hidden'
  document.querySelector('.content ').style.display ='block'
})


// Menu
const menu = document.querySelector(".menu");

// Open The MenuList
const menu_btn = document.querySelector(".menu_btn");
menu_btn.addEventListener("click", () => menu.classList.add("menu_active"));

// Close The MenuList
const close_btn = document.querySelector(".close_btn");
close_btn.addEventListener("click", () => menu.classList.remove("menu_active"));

const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  autoplay: true,
  delay: 200,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// inti wow js
new WOW().init();
