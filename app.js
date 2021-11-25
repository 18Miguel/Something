const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const SwiperContainer = document.querySelector(".swiper-container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
    SwiperContainer.classList.toggle("active");
});
