import jQuery from 'jquery';
(function ($) {

    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    function navbarFixed() {
        // console.log("here");
        
            // console.log("here");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    console.log("upper");
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    console.log("bottom");
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        
    }
    navbarFixed();
    $("#landing_page ul li a,.scrolls,.menu_top").on("click", function (event) {
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate({
                    scrollTop: $($anchor.attr("href")).offset().top - 75,
                },
                1000,
                "easeInOutExpo"
            );
        event.preventDefault();
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $("#landing_page ul .nav-item:not(.dropdown) .nav-link").on(
        "click",
        function () {
            $(".navbar-collapse").collapse("hide");
        }
    );


    function feedbackSlider() {
        var feedback_slider = $(".feedback_slider");
        if (feedback_slider.length) {
            feedback_slider.owlCarousel({
                loop: true,
                margin: 25,
                items: 3,
                nav: false,
                center: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                        stagePadding: 0,
                    },
                    1199: {
                        items: 3,
                        stagePadding: 0,
                    },
                },
            });
        }
    }
    feedbackSlider();
})(jQuery);