(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('.navbar ul li a[href^="#"],.arrow-down a').on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    });

})(jQuery); // End of use strict