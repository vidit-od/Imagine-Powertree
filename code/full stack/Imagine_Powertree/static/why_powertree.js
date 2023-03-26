// const declarations
const prev =document.querySelector(".page2_prev");
const next =document.querySelector(".page2_next");
const prev_else =document.querySelector(".page2_prev_else");
const next_else =document.querySelector(".page2_next_else");
const right_prev = document.querySelector(".page2_right_prev");
const right_next = document.querySelector(".page2_right_next");
const wheel =document.getElementById("mask");
const all_cards = document.querySelector(".all_cards");
let max = document.querySelectorAll(".card_else").length

// create collection of all divs
const divs=[div1,div2,div3,div4,div5,div6];


// collection of all cards
const cards=[card1,card2,card3,card4,card5,card6];

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
window.addEventListener('scroll',function(){
    heightset();
})
// all divs
window.addEventListener('DOMContentLoaded',function(){
    // initially all divs will be invisible except div1
div1.style.opacity="1";
div2.style.opacity="0";
div3.style.opacity="0";
div4.style.opacity="0";
div5.style.opacity="0";
div6.style.opacity="0";



// intitally only card1 will be visible
if(window.outerWidth >1000){
    card1.style.height="80%";
    card2.style.height="0%";
    card3.style.height="0%";
    card4.style.height="0%";
    card5.style.height="0%";
    card6.style.height="0%";
}
else{
    card1.style.height="auto";
    card2.style.height="0%";
    card3.style.height="0%";
    card4.style.height="0%";
    card5.style.height="0%";
    card6.style.height="0%";
    let x =document.querySelector(".card1").scrollHeight;
    document.querySelector(".page2 .right").style.height= x+ 0.2*x + "px"
}

// visibles are pinned at top
card1.style.top="10%"

heightset();
})
try{
const div1=document.getElementById("div1");
const div2=document.getElementById("div2");
const div3=document.getElementById("div3");
const div4=document.getElementById("div4");
const div5=document.getElementById("div5");
const div6=document.getElementById("div6");

// all cards
const card1=document.getElementById("card1");
const card2=document.getElementById("card2");
const card3=document.getElementById("card3");
const card4=document.getElementById("card4");
const card5=document.getElementById("card5");
const card6=document.getElementById("card6");

// angle and page denoter 
// angle for the pie animation; page for difference card
var angle =0;
var page = 0;


// the pinning from top and free from bottom OR
// pinning from bottom and free from top 
// is done to get the animation of one card shrinking from one size and other growing 


// button action for prev
prev.addEventListener("click" ,function(){
    
    // decrease angle by 60
    angle=angle-60;

    // all divs hidden
    div1.style.opacity="0";
    div2.style.opacity="0";
    div3.style.opacity="0";
    div4.style.opacity="0";
    div5.style.opacity="0";
    div6.style.opacity="0";
    
    // all cards freed from bottom & top
    card1.style.bottom='';
    card2.style.bottom='';
    card3.style.bottom='';
    card4.style.bottom='';
    card5.style.bottom='';
    card6.style.bottom='';

    card1.style.top='';
    card2.style.top='';
    card3.style.top='';
    card4.style.top='';
    card5.style.top='';
    card6.style.top='';

    // all cards hidden
    card1.style.height="0%";
    card2.style.height="0%";
    card3.style.height="0%";
    card4.style.height="0%";
    card5.style.height="0%";
    card6.style.height="0%";
    
    // current card pinned to bottom and freed from top
    cards[page].style.bottom="10%";
    cards[page].style.top='';
    
    // page decrement
    page=page-1;

    // corner case of reverse at 0
    if(page==-1){
        page=5;
    }

    // current div visible 
    divs[page].style.opacity="1";
    
    // pinned to top and free from bottom
    cards[page].style.top="10%";
    cards[page].style.bottom='';
    cards[page].style.height="80%";
    
    // rotate wheel
    wheel.style.transform= "rotate("+angle+"deg)";

})

// button action for next
next.addEventListener("click" ,function(){
    // increment the angle
    angle=angle+60;

    // all divs hidden
    div1.style.opacity="0";
    div2.style.opacity="0";
    div3.style.opacity="0";
    div4.style.opacity="0";
    div5.style.opacity="0";
    div6.style.opacity="0";

    // all cards freed from bottom and top
    card1.style.bottom='';
    card2.style.bottom='';
    card3.style.bottom='';
    card4.style.bottom='';
    card5.style.bottom='';
    card6.style.bottom='';

    card1.style.top='';
    card2.style.top='';
    card3.style.top='';
    card4.style.top='';
    card5.style.top='';
    card6.style.top='';

    // all cards hidder
    card1.style.height="0%";
    card2.style.height="0%";
    card3.style.height="0%";
    card4.style.height="0%";
    card5.style.height="0%";
    card6.style.height="0%";
    
    // current card free from bottom and pinned from top
    cards[page].style.bottom='';
    cards[page].style.top='10%';

    // increment page
    page=page+1;
    // corner case
    if(page==6){
        page=0
    }

    // free from top and pinned from bottom
    cards[page].style.top='';
    cards[page].style.bottom='10%';

    // card and div visible
    divs[page].style.opacity="1";
    cards[page].style.height="80%";

    // rotate wheel
    wheel.style.transform= "rotate("+angle+"deg)";
})

// 
right_prev.addEventListener("click" ,function(){
    // all divs hidden
    div1.style.opacity="0";
    div2.style.opacity="0";
    div3.style.opacity="0";
    div4.style.opacity="0";
    div5.style.opacity="0";
    div6.style.opacity="0";
    
    // all cards freed from bottom & top
    card1.style.bottom='';
    card2.style.bottom='';
    card3.style.bottom='';
    card4.style.bottom='';
    card5.style.bottom='';
    card6.style.bottom='';

    card1.style.top='';
    card2.style.top='';
    card3.style.top='';
    card4.style.top='';
    card5.style.top='';
    card6.style.top='';

    // all cards hidden
    card1.style.height="0%";
    card2.style.height="0%";
    card3.style.height="0%";
    card4.style.height="0%";
    card5.style.height="0%";
    card6.style.height="0%";
    
    // current card pinned to bottom and freed from top
    cards[page].style.bottom="10%";
    cards[page].style.top='';
    
    // page decrement
    page=page-1;

    // corner case of reverse at 0
    if(page==-1){
        page=5;
    }

    // current div visible 
    divs[page].style.opacity="1";
    
    // pinned to top and free from bottom
    cards[page].style.top="10%";
    cards[page].style.bottom='';
    cards[page].style.height="auto";
})

// button action for next
right_next.addEventListener("click" ,function(){
    // all divs hidden
    div1.style.opacity="0";
    div2.style.opacity="0";
    div3.style.opacity="0";
    div4.style.opacity="0";
    div5.style.opacity="0";
    div6.style.opacity="0";

    // all cards freed from bottom and top
    card1.style.bottom='';
    card2.style.bottom='';
    card3.style.bottom='';
    card4.style.bottom='';
    card5.style.bottom='';
    card6.style.bottom='';

    card1.style.top='';
    card2.style.top='';
    card3.style.top='';
    card4.style.top='';
    card5.style.top='';
    card6.style.top='';

    // all cards hidder
    card1.style.height="0%";
    card2.style.height="0%";
    card3.style.height="0%";
    card4.style.height="0%";
    card5.style.height="0%";
    card6.style.height="0%";
    
    // current card free from bottom and pinned from top
    cards[page].style.bottom='';
    cards[page].style.top='10%';

    // increment page
    page=page+1;
    // corner case
    if(page==6){
        page=0
    }

    // free from top and pinned from bottom
    cards[page].style.top='';
    cards[page].style.bottom='10%';

    // card and div visible
    divs[page].style.opacity="1";
    cards[page].style.height="auto";
})
}
catch(err){
let current = 0;
prev_else.style.pointerEvents="none"
prev_else.addEventListener("click",function(){
    current =current-1;
    if(current == 0){
        prev_else.style.pointerEvents="none";
    }
    else{
        prev_else.style.pointerEvents="all";
        next_else.style.pointerEvents="all";
    }
    let transform = -(current*500);
    all_cards.style.transform="translateX("+transform+"px)"
})

next_else.addEventListener("click",function(){
    current =current+1;
    if(current == max-1){
        next_else.style.pointerEvents="none";
    }
    else{
        next_else.style.pointerEvents="all";
        prev_else.style.pointerEvents="all";
    }
    let transform = -(current*500);
    all_cards.style.transform="translateX("+transform+"px)"
})

}

function heightset(){
    let navht = document.querySelector(".navbar").scrollHeight;
    document.querySelector(".page1").style.top= navht + "px"; 
    let page1 = document.querySelector(".page1").scrollHeight;
    document.querySelector(".page2").style.top= navht + page1+ "px"; 
    let page2 = document.querySelector(".page2").scrollHeight;
    document.querySelector(".page3").style.top= navht + page1+ page2 +"px"; 
    let page3 = document.querySelector(".page3").scrollHeight;
    document.querySelector(".footer").style.top= navht + page1+ page2 +page3+"px";
      
}