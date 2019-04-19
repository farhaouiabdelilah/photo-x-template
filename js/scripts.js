$(document).ready(function(){
    $(".nav-btn").on("click", function(){
       $(".nav-btn").toggleClass("change");
    });

    // Scroll
    $(window).scroll(function(){
        var pos = $(this).scrollTop();
        if(pos >= 200) {
            $(".navbar-menu").addClass("custom-navbar");
        } else {
            $(".navbar-menu").removeClass("custom-navbar");
        }
    });
});