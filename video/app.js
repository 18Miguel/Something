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
var video = document.querySelectorAll('video');
function playpause(){ 
    if(video.paused){
        video.play();
    }else{
        video.pause();
        video.currentTime = 0;
    }
}
video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');

    playpause();/*
    if(play.paused){
        play.play();
    }else{
        play.paused();
        play.currentTime = 0;
    }*/
}));
/*------------- ---------------- -------------*/

