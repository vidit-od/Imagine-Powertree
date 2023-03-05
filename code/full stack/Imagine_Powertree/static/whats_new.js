// variable declaration
const blogs = document.querySelectorAll('.card');

const pinned =0;

const total_cards = document.querySelectorAll(".card");
let max_allowed = 9;
current_page = 0;
const max_pages = Math.ceil(total_cards.length/max_allowed) -1 ;
pageset();

const height0= document.querySelector(".navbar").scrollHeight;
const height1= document.querySelector(".page1").scrollHeight;
document.querySelector(".page2").style.top = height0 + height1 + "px";
const height2= document.querySelector(".page2").scrollHeight;
const total_height= height0+ height1 + height2 + 50;
document.querySelector(".footer").style.top=total_height.toString()+"px";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
function pageset(){
    console.log(current_page);
    if (max_allowed < total_cards.length){
        let inner = "";
        for( let i = current_page * max_allowed; i< (current_page +1) * max_allowed ; i++){
            try{
                inner = inner +'<div class="card">'+total_cards[i].innerHTML +'</div>';
            }
            catch{
            }
        }
        document.querySelector(".cards").innerHTML = inner;
    
        
        document.querySelector(".prev").style.opacity = "0";
        document.querySelector(".prev").pointerEvents = "none";
    }
    else {
        document.querySelector(".navigation").style.opacity = "0";
        document.querySelector(".navigation").pointerEvents = "none";
    }
    document.querySelector(".current").innerHTML = current_page +1 ;
}
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

next.addEventListener("click", function(){
    current_page = current_page+1;
    pageset();
    if( current_page != 0){
        document.querySelector(".prev").style.opacity = "1";
        document.querySelector(".prev").pointerEvents = "all";
    }
    else{
        document.querySelector(".prev").style.opacity = "0";
        document.querySelector(".prev").pointerEvents = "none";
    }
    if (current_page ==  max_pages ){
        document.querySelector(".next").style.opacity = "0";
        document.querySelector(".next").pointerEvents = "none";
    }
    else{
        document.querySelector(".next").style.opacity = "1";
        document.querySelector(".next").pointerEvents = "all";
    }
})

prev.addEventListener("click", function() {
    current_page = current_page -1;
    pageset();
    if(current_page == 0){
        document.querySelector(".prev").style.opacity = "0";
        document.querySelector(".prev").pointerEvents = "none";
    }
    else{
        document.querySelector(".prev").style.opacity = "1";
        document.querySelector(".prev").pointerEvents = "all";
    }
    if(current_page != max_pages){
        document.querySelector(".next").style.opacity = "1";
        document.querySelector(".next").pointerEvents = "all";
    }
    else{
        document.querySelector(".next").style.opacity = "0";
        document.querySelector(".next").pointerEvents = "none";
    }
})