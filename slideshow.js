/*-------------------------- Slideshow --------------------------*/
var i = 0;
var images = ["background_01.png", "background_02.png",
              "background_03.png", "background_04.png",
              "background_05.png", "background_06.png"];
var slideTime = 10000; // 10 sec
const Slide = document.querySelector(".main");

function backgroundSlideshow(){
    Slide.style.background = "url(" + images[i] + ") no-repeat center / cover";

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout(backgroundSlideshow, slideTime);
}

window.onload = backgroundSlideshow();
/*-------------------------- --------- --------------------------*/
