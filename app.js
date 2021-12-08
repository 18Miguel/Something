/*---------------------------- Nav bar ----------------------------*/
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const SwiperContainer = document.querySelector(".swiper-container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});
/*---------------------------- ------- ----------------------------*/

/*-------------------------- Title Alert --------------------------*/
let showingTitle = false;
const interval = setInterval(() => {
    document.title = showingTitle? 'Miguel_' : 'Something_';
    showingTitle = !showingTitle;
}, 2000);

clearInterval(interval) //To Stop Title Alert
/*-------------------------- ----------- --------------------------*/
