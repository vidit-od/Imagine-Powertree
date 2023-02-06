const prev =document.querySelector(".page2_prev");
const next =document.querySelector(".page2_next");
const wheel =document.getElementById("mask");
const div1=document.getElementById("div1");
const div2=document.getElementById("div2");
const div3=document.getElementById("div3");
const div4=document.getElementById("div4");
const div5=document.getElementById("div5");
const div6=document.getElementById("div6");
var angle =0;
var page = 0;

div1.style.opacity="1";
div2.style.opacity="0";
div3.style.opacity="0";
div4.style.opacity="0";
div5.style.opacity="0";
div6.style.opacity="0";
const divs=[div1,div2,div3,div4,div5,div6]
console.log(divs[2])

prev.addEventListener("click" ,function(){
    angle=angle-60;
    div1.style.opacity="0";
    div2.style.opacity="0";
    div3.style.opacity="0";
    div4.style.opacity="0";
    div5.style.opacity="0";
    div6.style.opacity="0";
    page=page-1;
    if(page==-1){
        page=5;
    }
    divs[page].style.opacity="1";
    wheel.style.transform= "rotate("+angle+"deg)";

})

next.addEventListener("click" ,function(){
    angle=angle+60;
    div1.style.opacity="0";
    div2.style.opacity="0";
    div3.style.opacity="0";
    div4.style.opacity="0";
    div5.style.opacity="0";
    div6.style.opacity="0";page=page+1;
    if(page==6){
        page=0
    }
    divs[page].style.opacity="1";
    wheel.style.transform= "rotate("+angle+"deg)";
})