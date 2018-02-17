var animatedHeader = (function () {
    var shrinkHeader = 300;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        var arrow = $('#up-arrow');
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
            arrow.fadeIn("slow");
        }
        else {
            $('.header').removeClass('shrink');
            arrow.fadeOut("slow");
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

var resizeHomeSection = (function () {
    $(window).on("load resize", function () {
        $("#banner").css("height", window.innerHeight);
    });
});

var scrollspy = (function () {
    $('.ihelpyou').scrollspy({
        target: '.navbar'
    });
});

var parallax = (function () {
    $('#banner').parallaxie({
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
