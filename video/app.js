/*------------------- Scroll To Top -------------------*/
// Get the button and "main" body
var mybutton = document.getElementById("scroll-to-top");
var mainvideo = document.getElementById("MainVideo");

function ScrollFunction(){
    if(mainvideo.scrollTop > 1000){
        //mybutton.style.display = "block";
        mybutton.classList.add('show');
    }else{
        //mybutton.style.display = "none";
        mybutton.classList.remove('show');
    }
}

// When the user clicks on the button, scroll to the top of the document
function ScrollToTop(){
    mainvideo.scrollTop = 0;
}
/*------------------- ------------- -------------------*/

/*------------------ Character Cards ------------------*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate: 0,
        stretch: 2,
        depth: 100,
        modifier: 2,
        slideShadows: false,
    },
    loop: true,
});
/*------------------ ---------------- -----------------*/

/*------------- Videos Character -------------*/
const video = document.querySelectorAll(".video");
video.forEach(watch => watch.addEventListener("click", () => {
    watch.classList.toggle("active");
    document.querySelector(".mainvideo").classList.toggle("active");
}));

/* document.querySelector(".watch").addEventListener("click", () =>{
    document.querySelector(".watch").style.display = "none";
}); */

/*============================================================================================
//const watch = document.querySelector('.watch');
//const myiframe = document.querySelector('.myiframe');//#myiframe
//const iframe = document.querySelectorAll('iframe');
//const close = document.querySelector('.close');
//const mainvideo = document.querySelector('.mainvideo');

/*function playpause(){ 
    if(video.paused){
        video.play();
    }else{
        video.pause();
        video.currentTime = 0;
    }
}
document.querySelector('.watch').addEventListener("click", () => {
    document.querySelector('#myiframe').classList.toggle("active");
    document.querySelector('.close').classList.toggle("active");
    document.querySelector('.mainvideo').classList.toggle("active");
    //video.classList.toggle("active");
});
document.querySelector('.close').addEventListener("click", () => {
    document.querySelector('#myiframe').classList.remove("active");
    document.querySelector('.close').classList.remove("active");
    document.querySelector('.mainvideo').classList.remove("active");
});


video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
    video.classList.toggle("active");

    playpause();
    if(play.paused){
        play.play();
    }else{
        play.paused();
        play.currentTime = 0;
    }
}));
============================================================================================*/