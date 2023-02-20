// variable declaration
let path =document.querySelector('path');
let pathlength = path.getTotalLength();

// scroll effect for the svg line
path.style.strokeDasharray=pathlength;
path.style.strokeDashoffset=-pathlength;

let navbar = document.querySelector(".navbar").scrollHeight
let page1 =document.querySelector(".page1").scrollHeight;
let page2 =document.querySelector(".page2").scrollHeight;
let page3 =document.querySelector(".page3").scrollHeight;
let page4 =document.querySelector(".page4").scrollHeight;
let banner = document.querySelector(".joinbanner").scrollHeight;
let footer_top =navbar+ page1+ page2 + page3 + page4 + banner+"px";

let footer = document.getElementById("footer");
footer.style.top=footer_top;

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