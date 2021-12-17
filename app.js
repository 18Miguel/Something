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
    document.title = showingTitle? "My first Website" : "By Miguel";
    showingTitle = !showingTitle;
}, 10000); // 10 sec

clearInterval(interval) //To Stop Title Alert
/*-------------------------- ----------- --------------------------*/

