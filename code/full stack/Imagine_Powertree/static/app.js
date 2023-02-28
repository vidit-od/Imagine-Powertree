var height = document.documentElement.scrollHeight

const navbar =document.querySelector(".navbar");
const home_title = document.querySelectorAll(".text_animation");
const home_image = document.querySelector(".home_image");

window.addEventListener('DOMContentLoaded',function(){
    content_resize();
    pageht();
    navbar.style.transform="translateY(0%)";    
    for(let i = 0; i< home_title.length; i++){
        home_title[i].style.transform ="translateY(0%)";
    }
    home_image.style.transition="all 0.5s ease"
    home_image.style.opacity="1";
})
window.addEventListener('resize',function(){
    content_resize();
    pageht();
})
const navbar_content= document.querySelector(".content");
const navbar_right =document.querySelector(".navright");
const why_phowertree = document.querySelector(".why_powertree");
const backshade =document.querySelector(".backshade");
const p3_image = document.querySelector(".p3_image");
const p3_content = document.querySelector(".p3_content");
const p4_lower =document.querySelector(".lower");


window.addEventListener('scroll', function(){
    if(window.scrollX >=2000){
    const percent= window.scrollY/height * 100;
    console.log(percent)
    // powertree 360 rotation animation
    if (percent >= 0 && percent <=19.02){
        const degree = percent*9;
        home_image.style.transition="none";
        home_image.style.transform="rotateZ("+ degree +"deg)";
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
    }
})


let current = 0;
let transform = 1;
let images = document.querySelector(".images");
let all_slider_images= document.querySelectorAll(".p3_images");



images.innerHTML=images.innerHTML + "<div class='p3_images'>" +all_slider_images[0].innerHTML + "</div>";
function next(){
    current = current+1;
    if(window.outerWidth <= 1000){
        transform = -window.outerWidth*current;
        console.log("hi");
    }
    else{
        transform = -580*current;
    }
    let max = document.querySelectorAll(".p3_images").length;
    images.style.transition ="transform 2s ease";
    images.style.transform = "translateX("+ transform +"px)";
    images.addEventListener("transitionend" ,function() {
        if(current == max-1){
            images.style.transition ="none";
            current=0;
            transform = -600*current;
            images.style.transform = "translateX("+ transform +"px)";
        }
    })
    
}


function pageht(){
    let navbar_ht =document.querySelector(".navbar").scrollHeight;
    document.querySelector(".home").style.top = navbar_ht + "px";
    let page1 = document.querySelector(".home").scrollHeight;
    document.querySelector(".page2").style.top =navbar_ht + page1 +"px";
    let page2 = document.querySelector(".page2").scrollHeight;
    document.querySelector(".page3").style.top = navbar_ht + page1 + page2 + "px"; 
    let page3 = document.querySelector(".page3").scrollHeight;
    document.querySelector(".page4").style.top = navbar_ht + page1 + page2 + page3 + "px";
    let page4 = document.querySelector(".page4").scrollHeight;

    document.querySelector(".banner").style.top = navbar_ht + page1 + page2 + page3 + page4 + "px";
    let banner = document.querySelector(".banner").scrollHeight;
    
    document.querySelector(".page5").style.top = navbar_ht + page1 + page2 + page3 + page4 +banner+ "px";
    let page5 = document.querySelector(".page5").scrollHeight;
    document.getElementById("footer").style.top=(navbar_ht + page1+ page2 + page3 + page4 + page5 + banner+"px");
}
function content_resize(){
    if(window.outerWidth <= 1000){
        console.log("yo");
        document.querySelector(".p3_image").style.width = window.outerWidth + "px";
        let all_images = document.querySelectorAll(".p3_images");
        for(i =0; i< all_images.length; i++){
            all_images[i].style.width = window.outerWidth + "px";
        }

        document.querySelector(".p3_content").style.width = window.outerWidth + "px";

        //  console.log(document.querySelector(".footer_img").he, document.querySelector(".footer .upper").style.height )
        document.querySelector(".footer_img").style.height = document.querySelector(".footer .upper").clientHeight + "px";
    }
}
setInterval(function() {
    next()
  }, 5000);

