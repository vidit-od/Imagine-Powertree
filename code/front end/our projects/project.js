// variable declaration
let current_page=1;
let transform =0;
let transformy=0;
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const img =document.querySelectorAll('.image');
const imgs = document.querySelector('.allimgs');
const text = document.querySelector(".textslider");
const text_slider = document.querySelector(".textslider");

let delay=5000;
let imgtransform = 600;
let texttransform = 400;
let slider_time=2

// initially transform 1 image
transform =current_page*(-imgtransform);
console.log(transform);
transformy =current_page*(-texttransform);
imgs.style.transform='translateX('+transform.toString()+'px)';
text.style.transform='translateY('+transformy.toString()+'px)';




// prev.addEventListener('click',function(){
//     prevslide();
// })
// next.addEventListener('click',function(){
//     nextslide();
// })
// function prevslide(){
//     current_page=(current_page-1); 
//     imgs.style.transition="all " + slider_time + "s ease";
//     text.style.transition="all " + slider_time + "s ease";
    
//     transform =current_page*(-600);
//     transformy =current_page*(-400);
    
//     imgs.style.transform= 'translateX('+transform.toString()+'px)';
//     text.style.transform='translateY('+transformy.toString()+'px)';

//     // imgs.addEventListener('transitionstart',function(){
//     //     prev.style.pointerEvents="none";
//     //     next.style.pointerEvents="none";
//     // })
//     imgs.addEventListener('transitionend',function(){
//         if(current_page == 0){    
//             imgs.style.transition="none";
//             text.style.transition="none";

//             current_page= img.length-2;
            
//             transform =current_page*(-600);
//             transformy =current_page*(-400);

//             imgs.style.transform='translateX('+transform.toString()+'px)';
//             text.style.transform='translateY('+transformy.toString()+'px)';

//             delay=5000;
//         }
//         // prev.style.pointerEvents="all";
//         // next.style.pointerEvents="all";
//     })
    


// }
function nextslide(){
    current_page=(current_page+1);
    
    imgs.style.transition="all "+ slider_time +"s ease";
    text.style.transition="all "+ slider_time +"s ease";

    transform =current_page*(-600);
    transformy =current_page*(-400);

    imgs.style.transform= 'translateX('+transform.toString()+'px)';
    text.style.transform='translateY('+transformy.toString()+'px)';

    // imgs.addEventListener('transitionstart',function(){
    //     console.log('lock');
    //     prev.style.pointerEvents="none";
    //     next.style.pointerEvents="none";
    // })
    imgs.addEventListener('transitionend',function(){
        if(current_page == img.length-1){    
            imgs.style.transition="none";
            text.style.transition="none";
            
            current_page= 1;
            
            transform =current_page*(-600);
            transformy =current_page*(-400);

            imgs.style.transform='translateX('+transform.toString()+'px)';
            text.style.transform='translateY('+transformy.toString()+'px)';
        }
        // prev.style.pointerEvents="all";
        // next.style.pointerEvents="all";
    })

}

// change image  after 5 seconds
setInterval(function() {
    nextslide()
  }, delay);