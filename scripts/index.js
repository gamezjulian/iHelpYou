var animatedHeader = (function () {
    var shrinkHeader = 300;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
        }
        else {
            $('.header').removeClass('shrink');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

var resizeHomeSection = (function () {
    $(window).on("load resize", function () {
        $(".container_banner .fill-screen-section").css("height", window.innerHeight);
    });
});

var scrollspy = (function () {
    $('.ihelpyou').scrollspy({
        target: '.navbar'
    });
});

var parallax = (function () {
    $('.container_banner .fill-screen-section').parallaxie({
        speed: 0.4
    });
});


$(function () {
    animatedHeader();
    resizeHomeSection();
    scrollspy();
    parallax();

    new WOW().init();
});
