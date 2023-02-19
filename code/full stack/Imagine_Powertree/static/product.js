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
    image.style.transform="translateX(-60%) translateY(-50%)";
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
    image.style.transform="translateX(0%) translateY(-50%)";
    images[current_page].style.width="";
    
    for(let i =0; i<images.length; i++){
        images[i].style.pointerEvents="all";
    }
})
}
