let p = document.getElementById("time")
setInterval(()=>{
    localStorage.setItem("time",parseInt(localStorage.getItem("time"))+1);
    p.innerHTML = localStorage.getItem("time");
},1000);
