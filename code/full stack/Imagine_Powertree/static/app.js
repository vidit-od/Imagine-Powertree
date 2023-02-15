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
const why_phowertree = document.querySelector(".why_powertree");
const backshade =document.querySelector(".backshade");
const p3_image = document.querySelector(".p3_image");
const p3_content = document.querySelector(".p3_content");
const p4_lower =document.querySelector(".lower");
window.addEventListener('scroll', function(){
    const percent= window.scrollY/height * 100;
    console.log(percent)
    // powertree 360 rotation animation
    if (percent >= 0 && percent <=19.02){
        const degree = percent*9;
        home_image.style.transition="none"
        home_image.style.transform="rotateZ("+ degree +"deg)"
    }

    // page2 appear animation
    if(percent >= 10.00 && percent <= 18){
        let transform = (percent-10)*6.25 - 50;
        why_phowertree.style.transform="translateX("+transform+"%)";

        let max_height =335;
        let max_width =377;

        backshade.style.width= (percent-10)*(max_width/8)+"px";
        backshade.style.height= (percent-10)*(max_height/8)+"px";
    }
    else if( percent > 18){
        why_phowertree.style.transform="translateX(0%)";
        backshade.style.width= "377px";
        backshade.style.height="335px";
    }
    // page3 appear animation
    if(percent >=25 && percent <= 33 ){
        transform = (percent-25)*6.25 -50;
        p3_image.style.transform="translateX("+transform+"%) translateY(2%)";
        p3_content.style.transform="translateX("+( -transform )+"%)";
    }
    else if( percent >33){
        p3_image.style.transform="translateX(0%) translateY(2%)";
        p3_content.style.transform="translateX(0%)";
    }
    if(percent >= 42 && percent <= 50){
        transform= 50-(percent-42)*6.25;
        p4_lower.style.transform="translateY("+transform+"%)";
    }
    else if(percent > 50){
        p4_lower.style.transform="translateY(0%)";
    }

    if(percent >= 56){
        document.querySelector(".banner").style.width="100%";
        document.querySelector(".arrow").style.width="40%";
    }
    else if(percent < 56){
        document.querySelector(".banner").style.width="50%";
        document.querySelector(".arrow").style.width="0%";
    }
})