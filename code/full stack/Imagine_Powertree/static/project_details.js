const details_content = document.querySelector(".details");

let details = details_content.innerHTML;
details = details.replaceAll("&lt;","<");
details = details.replaceAll("&gt;",">");

details_content.innerHTML = details;
console.log(details);