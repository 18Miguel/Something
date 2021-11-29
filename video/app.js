/*------------- Character Cards --------------*/
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
/*------------- ---------------- -------------*/

/*------------- Videos Character -------------*/
var video = document.querySelectorAll('video');
video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
    
    if(play.paused){
        play.play();
    }else{
        play.paused();
        play.currentTime = 0;
    }
}));
/*------------- ---------------- -------------*/