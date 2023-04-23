
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





let sub_btn = document.getElementById("submitAnswer")

// submitAnswer

sub_btn.addEventListener("click",()=>{
    window.location.replace("./lastpage.html")
})




console.clear();