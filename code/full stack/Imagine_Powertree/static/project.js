const images = document.querySelector(".images");
let imgs = document.querySelectorAll(".image");
const texts = document.querySelector(".texts");
let txts = document.querySelectorAll(".text");

images.innerHTML = images.innerHTML + "<div class='image'>" + imgs[0].innerHTML+ "</div>";
texts.innerHTML = texts.innerHTML + "<div class='text'>"+ txts[0].innerHTML + "</div>";


imgs = document.querySelectorAll(".image");
txts = document.querySelectorAll(".text");

var current = 0;
var transform =1;

if(window.outerWidth <1000){
    resp();
}
heightset()

const slider = document.querySelector(".slider");
let toggle = 0;
document.querySelector(".sidemenu").style.transition = "all 1s ease";
slider.addEventListener('click',function(){
    if(toggle == 0){
    document.querySelector(".sidemenu").style.transform = "translateX(0%)";
    
    slider.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'

    document.querySelector(".slider svg").style.fill ="red";
    toggle =1;
    }
    else{
        document.querySelector(".sidemenu").style.transform = "translateX(100%)";
    
        slider.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>'
    
        document.querySelector(".slider svg").style.fill ="#ff9900";
        toggle =0;
    }
})
function resp(){
    const image_frame = document.querySelector(".image_frame");
    image_frame.style.width = window.outerWidth + "px";
    const all_images = document.querySelectorAll(".image");
    const all_texts = document.querySelectorAll(".text");
    document.querySelector(".desc_frame").style.transform = "translateX(-"+ (window.outerWidth/2 + 10)+"px) translateY("+(0.6*window.outerHeight) +"px)";

    for(let i = 0; i< imgs.length; i++){
        all_images[i].style.width = window.outerWidth + "px";
        all_texts[i].style.width = window.outerWidth + "px";
        
    }
}
function next(){
    current = current+1;
    if( window.outerWidth > 1000){
        transform = -500*current;
    }
    else{
        transform = -(window.outerWidth)*current;
    }
    images.style.transition = "transform 2s ease";
    images.style.transform = "translateX(" + transform + "px)";
    texts.style.transition = "transform 2s ease";
    texts.style.transform= "translateX(" + transform + "px)";
    images.addEventListener("transitionend", function(){
        if(current == imgs.length-1){
            images.style.transition = "none";
            texts.style.transition = "none";
            console.log("in");
            current = 0;
            if( window.outerWidth > 1000){
                transform = -500*current;
            }
            else{
                transform = -(window.outerWidth)*current;
            }
            images.style.transform = "translateX(" + transform + "px)";
            texts.style.transform= "translateX(" + transform + "px)";
        }
    })
    
}
function heightset(){
    const navbar_height = document.querySelector(".navbar").scrollHeight;
    document.querySelector(".page1").style.top = navbar_height + "px";
    const page1 =document.querySelector(".page1").scrollHeight;
    document.querySelector(".page2").style.top = navbar_height +page1 +"px";
    const page2 =document.querySelector(".page2").scrollHeight;
    document.querySelector(".page3").style.top = navbar_height +page1+page2+ "px";
    const page3 =document.querySelector(".page3").scrollHeight;
    document.querySelector(".page4").style.top = navbar_height +page1+page2+page3+"px";
    const page4 = document.querySelector(".page4").scrollHeight;
    document.getElementById("footer").style.top = navbar_height + page1 +page2 + page3 + page4 +"px";
}
 setInterval(function() {
         next()
   }, 5000);