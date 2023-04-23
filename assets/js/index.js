

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



// Clue 1
$("#startJourney").click(function () {
    window.location.href ="clue1.html";
});










let p = document.getElementById("time")
localStorage.setItem("time",0)
setInterval(()=>{
    localStorage.setItem("time",parseInt(localStorage.getItem("time"))+1);
    p.innerHTML = localStorage.getItem("time");
},1000);




console.clear();
