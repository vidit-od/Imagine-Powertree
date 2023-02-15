// const declarations
const prev =document.querySelector(".page2_prev");
const next =document.querySelector(".page2_next");
const wheel =document.getElementById("mask");

// all divs
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

// initially all divs will be invisible except div1
div1.style.opacity="1";
div2.style.opacity="0";
div3.style.opacity="0";
div4.style.opacity="0";
div5.style.opacity="0";
div6.style.opacity="0";

// create collection of all divs
const divs=[div1,div2,div3,div4,div5,div6];

// intitally only card1 will be visible
card1.style.height="80%";
card2.style.height="0%";
card3.style.height="0%";
card4.style.height="0%";
card5.style.height="0%";
card6.style.height="0%";

// collection of all cards
const cards=[card1,card2,card3,card4,card5,card6];

// visibles are pinned at top
card1.style.top="10%"


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