const images = document.querySelector(".images");
let imgs = document.querySelectorAll(".image");
const texts = document.querySelector(".texts");
let txts = document.querySelectorAll(".text");

images.innerHTML = images.innerHTML + "<div class='image'>" + imgs[0].innerHTML+ "</div>";
texts.innerHTML = texts.innerHTML + "<div class='text'>"+ txts[0].innerHTML + "</div>";


imgs = document.querySelectorAll(".image");
txts = document.querySelectorAll(".text");

const navbar_height = document.querySelector(".navbar").scrollHeight;
const page1 =document.querySelector(".page1").scrollHeight;
const page2 =document.querySelector(".page2").scrollHeight;
const page3 =document.querySelector(".page3").scrollHeight;
document.getElementById("page4").style.top = navbar_height + page1 +page2 + page3 +"px";
const page4 = document.querySelector(".page4").scrollHeight;
document.getElementById("footer").style.top = navbar_height + page1 +page2 + page3 + page4 +"px";

var current = 0;
var transform =1;
function next(){
    current = current+1;
    transform = -500*current;
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
            transform = -500*current;
            images.style.transform = "translateX(" + transform + "px)";
            texts.style.transform= "translateX(" + transform + "px)";
        }
    })
    
}

setInterval(function() {
    next()
  }, 5000);