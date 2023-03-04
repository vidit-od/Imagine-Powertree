const details_content = document.querySelector(".details");

let details = details_content.innerHTML;
details = details.replaceAll("&lt;","<");
details = details.replaceAll("&gt;",">");
details_content.innerHTML = details;


let navht = document.querySelector(".navbar").scrollHeight;
let page1 = document.querySelector(".main_content").scrollHeight;
console.log(navht);
console.log(page1);
document.querySelector(".footer").style.top = navht + page1 + 20 +"px";
