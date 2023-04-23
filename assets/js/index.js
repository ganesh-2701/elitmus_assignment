

(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

})(jQuery);

// Play Music
body.addEventListener('click', function () {
    $("#autoPlayMusic")[0].play();
});

// Clue 1
$("#startJourney").click(function () {
    window.location.href ="clue1.html";
});








// let time= localStorage.getItem(time);


let p = document.getElementById("time")
localStorage.setItem("time",0)
setInterval(()=>{
    localStorage.setItem("time",parseInt(localStorage.getItem("time"))+1);
    p.innerHTML = localStorage.getItem("time");
},1000);



// const pageAccessedByReload = (
//     (window.performance.navigation && window.performance.navigation.type === 1) ||
//       window.performance
//         .getEntriesByType('navigation')
//         .map((nav) => nav.type)
//         .includes('reload')
//   );
  
//   alert(pageAccessedByReload);


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
    // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";




console.clear();
