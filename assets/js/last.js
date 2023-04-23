
document.getElementById("PlayAgain").addEventListener("click",()=>{
    window.location.replace("./index.html");
}) 
let r = localStorage.getItem("time");
document.getElementById("res").innerHTML = r;


