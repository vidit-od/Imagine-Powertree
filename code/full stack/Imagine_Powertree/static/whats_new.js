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