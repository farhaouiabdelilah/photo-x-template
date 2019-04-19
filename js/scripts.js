$(document).ready(function(){
    $(".nav-btn").on("click", function(){
       $(".nav-btn").toggleClass("change");
    });

    // Scroll for nav
    $(window).scroll(function(){
        var pos = $(this).scrollTop();
        if(pos >= 200) {
            $(".navbar-menu").addClass("custom-navbar");
        } else {
            $(".navbar-menu").removeClass("custom-navbar");
        }
    });

    // Scrol for mission animation
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 810) {
            $('.mission-img').addClass('from-left');
            $('.mission-text').addClass('from-right');
        } else {
            $('.mission-img').removeClass('from-left');
            $('.mission-text').removeClass('from-right');
        }
    });

});