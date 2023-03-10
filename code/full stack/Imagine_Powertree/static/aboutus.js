// variable declaration
let path =document.querySelector('.line path');
let pathlength = path.getTotalLength();

// scroll effect for the svg line
path.style.strokeDasharray=pathlength;
path.style.strokeDashoffset=-pathlength;
heightset();
window.addEventListener('DOMContentLoaded',function(){
    heightset();
})
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
// activate scroll on scroll
window.addEventListener('scroll', () => {
    let height_1= document.querySelector(".page1").scrollHeight;
    let height_2= document.querySelector(".page2").scrollHeight;
    let total=height_2;
    
    let percent = ((total+height_1-scrollY)/total)*100
    percent=percent/100;
    path.style.strokeDashoffset= -percent*pathlength+200;
    // 2018
    if( percent <0.97){
        document.getElementById("hide-title1").style.width="0%";
        document.getElementById("circle1").style.opacity="1";
    }
    else{
        document.getElementById("hide-title1").style.width="100%";
        document.getElementById("circle1").style.opacity="0";
    }
    if(percent < 0.93){
        document.getElementById("c1hide1").style.width="0%";
    }
    else{
        document.getElementById("c1hide1").style.width="100%";
    }
    if(percent < 0.90){
        document.getElementById("c1hide2").style.width="0%";
    }
    else{
        document.getElementById("c1hide2").style.width="100%";
    }
    if(percent < 0.86){
        document.getElementById("c1hide3").style.width="0%";
    }
    else{
        document.getElementById("c1hide3").style.width="100%";
    }
   // 2019
    if(percent < 0.79){
        document.getElementById("hide-title2").style.width="0%";
        document.getElementById("circle2").style.opacity="1";
    }
    else{
        document.getElementById("hide-title2").style.width="100%";
        document.getElementById("circle2").style.opacity="0";
    }
    if(percent < 0.76){
        document.getElementById("c2hide1").style.width="0%";
    }
    else{
        document.getElementById("c2hide1").style.width="100%";
    }
    if(percent < 0.72){
        document.getElementById("c2hide2").style.width="0%";
    }
    else{
        document.getElementById("c2hide2").style.width="100%";
    }
    if(percent < 0.69){
        document.getElementById("c2hide3").style.width="0%";
    }
    else{
        document.getElementById("c2hide3").style.width="100%";
    }
   // 2020
    if(percent < 0.62){
        document.getElementById("hide-title3").style.width="0%";
        document.getElementById("circle3").style.opacity="1";
    }
    else{
        document.getElementById("hide-title3").style.width="100%";
        document.getElementById("circle3").style.opacity="0";
    }
    if(percent < 0.58){
        document.getElementById("c3hide1").style.width="0%";
    }
    else{
        document.getElementById("c3hide1").style.width="100%";
    }
    if(percent < 0.53){
        document.getElementById("c3hide2").style.width="0%";
    }
    else{
        document.getElementById("c3hide2").style.width="100%";
    }
   // 2021
    if(percent < 0.47){
        document.getElementById("hide-title4").style.width="0%";
        document.getElementById("circle4").style.opacity="1";
    }
    else{
        document.getElementById("hide-title4").style.width="100%";
        document.getElementById("circle4").style.opacity="0";
    }
    if(percent < 0.43){
        document.getElementById("c4hide1").style.width="0%";
    }
    else{
        document.getElementById("c4hide1").style.width="100%";
    }
    if(percent < 0.41){
        document.getElementById("c4hide2").style.width="0%";
    }
    else{
        document.getElementById("c4hide2").style.width="100%";
    }
    if(percent < 0.37){
        document.getElementById("c4hide3").style.width="0%";
    }
    else{
        document.getElementById("c4hide3").style.width="100%";
    }
   // 2022
    if(percent < 0.33){
        document.getElementById("hide-title5").style.width="0%";
        document.getElementById("circle5").style.opacity="1";
    }
    else{
        document.getElementById("hide-title5").style.width="100%";
        document.getElementById("circle5").style.opacity="0";
    }
    if(percent < 0.29){
        document.getElementById("c5hide1").style.width="0%";
    }
    else{
        document.getElementById("c5hide1").style.width="100%";
    }
    if(percent < 0.25){
        document.getElementById("c5hide2").style.width="0%";
    }
    else{
        document.getElementById("c5hide2").style.width="100%";
    }
    if(percent < 0.23){
        document.getElementById("c5hide3").style.width="0%";
    }
    else{
        document.getElementById("c5hide3").style.width="100%";
    }
    // banner
    if(percent < 0.14){
        document.getElementById("banner").style.height="100%"
    }
    else{
        document.getElementById("banner").style.height="0%"
    }
})

function heightset(){
    let navbar = document.querySelector(".navbar").scrollHeight
    document.querySelector(".page1").style.top = navbar + 'px';
    let page1 =document.querySelector(".page1").scrollHeight;
    document.querySelector(".page2").style.top = navbar + page1 + 'px';
    let page2 =document.querySelector(".page2").scrollHeight;
    document.querySelector(".page3").style.top = navbar + page1 + page2 +'px';
    let page3 =document.querySelector(".page3").scrollHeight;
    document.querySelector(".page4").style.top = + navbar + page1 + page2 + page3 +'px';
    let page4 =document.querySelector(".page4").scrollHeight;
    document.querySelector(".joinbanner").style.top = navbar + page1 + page2 + page3 + page4 +'px';
    let banner = document.querySelector(".joinbanner").scrollHeight;
    document.querySelector(".footer").style.top = navbar + page1 + page2 + page3 + page4 + banner + 'px'
}