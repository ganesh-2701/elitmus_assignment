
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

$("#submitAnswer").click(function () {
    var ruleTrivia = document.getElementById("ruleTrivia").value;
    var result = ruleTrivia.toString().toLowerCase();
    var finalResult = result.includes("22");
    if (finalResult == true) {
        window.location.href = "clue7.html";
    }
    else {
        document.getElementById("errorHandler").innerHTML = "Wrong Answer. Please Try again.";
    }
});





console.clear();