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

    // Gallery Image filter
    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value === 'all') {
            $('.filter').show(500);
        } else {
            $('.filter').not('.'+value).hide(500);
            $('.filter').filter('.'+value).show(500);
        }
    });

    // show input label
    $(".input").keypress(function () {
        $('label').removeClass("label");
        $('label').addClass("label-show");
    });

});