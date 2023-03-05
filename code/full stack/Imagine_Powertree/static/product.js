// const declaration

const prev= document.getElementById("prev")
const next= document.getElementById("next")
const all_pages=document.querySelectorAll(".slide");
const image = document.querySelector(".slide__img")
const images =document.querySelectorAll(".images");
const items = document.querySelectorAll(".item");
const back =document.querySelectorAll(".back");
const length = all_pages.length;


// current and previous product
let current_page=0;
let prev_page;


images[0].style.opacity="1";
all_pages[0].classList.add("show_slide");

heightset();
// previous button 
prev.addEventListener('click', function(){
    document.getElementById("deco").classList.add("click_anim");
    document.getElementById("deco").addEventListener('animationend', function(){
        document.getElementById("deco").classList.remove("click_anim");
    })
    prev_page= current_page;
    current_page= (current_page -1 );

    if(current_page == -1){
        current_page = length-1;
    }

    pagereplacement(prev_page,current_page);

    images[prev_page].classList.add("image_up_prev");
    images[prev_page].addEventListener('animationend',() => {
        images[prev_page].classList.remove("image_up_prev");
        images[prev_page].style.opacity="0";
    })
    images[current_page].classList.add("image_down_prev");
    images[current_page].addEventListener('animationend',() => {
        images[current_page].classList.remove("image_down_prev");
        images[current_page].style.opacity="1";
    })
    images[prev_page].style.opacity="0";
    images[prev_page].style.pointerEvents="null";
    images[current_page].style.opacity="1";
    images[current_page].style.pointerEvents="all";

    console.log(current_page);
})

// next button
next.addEventListener('click', function(){
    document.getElementById("deco").classList.add("click_anim");

    
    document.getElementById("deco").addEventListener('animationend', function(){
        document.getElementById("deco").classList.remove("click_anim");
    })
    
    prev_page= current_page;
    current_page= ( current_page+1 ) % length;
    
    pagereplacement(prev_page,current_page);

    images[prev_page].classList.add("image_up_next");
    images[prev_page].addEventListener('animationend',() => {
        images[prev_page].classList.remove("image_up_next");
        images[prev_page].style.opacity="0";
    })
    images[current_page].classList.add("image_down_next");
    images[current_page].addEventListener('animationend',() => {
        images[current_page].classList.remove("image_down_next");
        images[current_page].style.opacity="1";
    })
    images[prev_page].style.opacity="0";
    images[prev_page].style.pointerEvents="null";
    images[current_page].style.opacity="1";
    images[current_page].style.pointerEvents="all";

    console.log(current_page);

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
// after page change; change prev and current page
function pagereplacement(prev_page,current_page){
    // erase all
    all_pages[prev_page].classList.remove("show_slide");
    all_pages[current_page].classList.add("show_slide");
}

for(let i=1; i<document.querySelectorAll(".desc").length;i++){
    let k = String(document.querySelectorAll(".desc")[i].innerHTML);
    k=k.toString();
    k=k.replaceAll("&lt;", "<");
    k=k.replaceAll("&gt;", ">");
    document.querySelectorAll(".desc")[i].innerHTML = k;
    console.log(k)
}

// expand for more info
image.addEventListener('click', function(){
    document.querySelector(".slideshow__deco").classList.add("expand__deco");
    document.querySelector(".slideshow__deco").addEventListener('transitionend', function(){
        items[current_page].style.opacity="1";
    })
    prev.style.transform="translateX(-100px)";
    next.style.transform="translateX(100px)";
    all_pages[current_page].classList.remove("show_slide");

    image.style.pointerEvents="none";
    if(window.outerWidth >1000){
        image.style.transform="translateX(-60%) translateY(-50%)";
    }
    else{
        image.style.opacity=0;
    }
    images[current_page].style.width="100%";
    
    for(let i =0; i<images.length; i++){
        images[i].style.pointerEvents="none";
    }

})

// hide info
for(var i =0; i< back.length; i++){
back[i].addEventListener('click', function() {
    document.querySelector(".slideshow__deco").classList.remove("expand__deco");
    items[current_page].style.opacity="0";

    prev.style.transform="translateX(0px)";
    next.style.transform="translateX(0px)";
    all_pages[current_page].classList.add("show_slide");

    image.style.pointerEvents="all";
    image.style.opacity=1;
    image.style.transform="translateX(0%) translateY(-50%)";
    images[current_page].style.width="";
    
    for(let i =0; i<images.length; i++){
        images[i].style.pointerEvents="all";
    }
})
}

function heightset(){
    let navht = document.querySelector(".navbar").clientHeight;
    document.querySelector(".page1").style.top = navht +"px";
    
    let page1 = document.querySelector(".page1").clientHeight;
    document.querySelector(".page2").style.top= navht + page1 + "px";

    let page2 = document.querySelector(".page2").clientHeight;
    document.querySelector(".page3").style.top = navht + page1 +page2+ "px";

    let page3 = document.querySelector(".page3").clientHeight;
    document.querySelector(".footer").style.top = navht + page1 +page2+page3+ "px";
    console.log("height set");
}
