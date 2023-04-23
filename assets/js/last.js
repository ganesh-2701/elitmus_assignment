
document.getElementById("PlayAgain").addEventListener("click",()=>{
    window.location.replace("./clue0.html");
}) 
let r = localStorage.getItem("time");
document.getElementById("res").innerHTML = r;


