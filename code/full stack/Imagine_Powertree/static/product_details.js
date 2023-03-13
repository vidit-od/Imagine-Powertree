
let k = String(document.querySelector(".desc").innerHTML);
k=k.toString();
k=k.replaceAll("&lt;", "<");
k=k.replaceAll("&gt;", ">");
document.querySelector(".desc").innerHTML = k;