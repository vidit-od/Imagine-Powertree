const blogs = document.querySelectorAll('.card');

const pinned =0;

const height0= document.querySelector(".navbar").scrollHeight;
const height1= document.querySelector(".page1").scrollHeight;
const height2= document.querySelector(".page2").scrollHeight;
const total_height= height0+ height1 + height2+50;

document.querySelector(".footer").style.top=total_height.toString()+"px"