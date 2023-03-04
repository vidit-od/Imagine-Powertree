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