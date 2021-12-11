var txt_part1 = 'Well, the reason I developed this app/website was to put my skills into practice, and because I wanted to have a website {something mine, u know, proud of yourself} and of course for fun.';
var txt_part2 = 'Unknown.'
var txt_part3 = 'Somewhere_'
var speed = 40;
var i = 0, j = 0, k = 0;

window.onload = typeWriter();
function typeWriter(){
    if(i < txt_part1.length){
        document.getElementById("explanation-text").innerHTML += txt_part1.charAt(i);
        i++;
        if(i == txt_part1.length){
            document.querySelector(".title._2").classList.toggle("active");
        }
        setTimeout(typeWriter, speed);

    }else if(i == txt_part1.length && j < txt_part2.length){
        document.getElementById("aboutme-text").innerHTML += txt_part2.charAt(j);
        j++;
        if(j == txt_part2.length){
            document.querySelector(".title._3").classList.toggle("active");
        }
        setTimeout(typeWriter, speed);

    }else if(j == txt_part2.length && k < txt_part3.length){
        document.getElementById("content-text").innerHTML += txt_part3.charAt(k);
        k++;
        setTimeout(typeWriter, speed);
    }
}
