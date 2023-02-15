var height = document.documentElement.scrollHeight
console.log(height);

const navbar =document.querySelector(".navbar");
const home_title = document.querySelectorAll(".text_animation");
const home_image = document.querySelector(".home_image");

window/addEventListener('DOMContentLoaded',function(){
    
    navbar.style.transform="translateY(0%)";    
    for(let i = 0; i< home_title.length; i++){
        home_title[i].style.transform ="translateY(0%)";
    }
    home_image.style.transition="all 0.5s ease"
    home_image.style.opacity="1";
})

const navbar_content= document.querySelector(".content");
const navbar_right =document.querySelector(".navright");
window.addEventListener('scroll', function(){
    const percent= window.scrollY/height * 100;
    console.log(percent)
    if (percent >= 0 && percent <=19.02){
        const degree = percent*9;
        home_image.style.transition="none"
        home_image.style.transform="rotateZ("+ degree +"deg)"
    }
    if( percent >= 15.00){
        navbar_content.style.transition="all 1s ease";
        navbar_content.style.transform="translateX(-25%)  translateY(-50%)";
        navbar_right.style.transform="translateX(0%) translateY(-50%)";
    }
    else{
        navbar_content.style.transition="all 1s ease";
        navbar_content.style.transform="translateX(-45%) translateY(-50%)";
        navbar_right.style.transform="translateX(-20%) translateY(-50%)";
    }
})