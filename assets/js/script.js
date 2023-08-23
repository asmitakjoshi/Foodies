// scroll top btn

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.top-scroll-btn').fadeIn();
    } else {
        $('.top-scroll-btn').fadeOut();
    }
});

$('.top-scroll-btn').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

// init wow

new WOW().init();

// add class on navbar while scroll

$(window).scroll(function () {
    var nav = $('.navbar');
    var top = 50;
    if ($(window).scrollTop() >= top) {

        nav.addClass('headerFixed');

    } else {
        nav.removeClass('headerFixed');
    }
});

// loader 

$('.food-loader').fadeOut('slow', function () {
    $(this).remove();
});

// mobile toggle 

if ($(window).width() <= 991) {
    $(".open-toggle").click(function (event) {
        event.preventDefault();
        if ($(this).hasClass("isDown")) {
            $(".toggle-div").stop().animate({
                left: "-300px"
            }, 500);
        } else {
            $(".toggle-div").stop().animate({
                left: "0"
            }, 500);
        }
        $(this).toggleClass("isDown");
        return false;
    });
    $('li.nav-drop').click(function () {
        $(this).siblings().find('ul').slideUp();
        $(this).find('ul').slideToggle();
    });
    $('li.nav-drop').click(function () {
        $(this).siblings().find('h5').slideUp();
        $(this).find('h5').slideToggle();
    });
}