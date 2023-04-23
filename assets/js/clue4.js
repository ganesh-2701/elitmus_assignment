
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



// Submit Answer
$("#submitAnswer").click(function () {
    var firstTimeOut = document.getElementById("firstTimeOutside").value;
    var result = firstTimeOut.toString().toLowerCase();
    var finalResult = result.includes("all");
    if (finalResult == true) {
        window.location.href = "clue5.html";
    }
    else {
        document.getElementById("errorHandler").innerHTML = "Wrong Answer. Please Try again.";
    }
});

console.clear();