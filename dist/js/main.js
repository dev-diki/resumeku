/*  Theme Name:Zico - Personal Portfolio Template
    Version: 1.0.0
    File Description:Main JS file of the template
*/

(function ($) {
    "use strict";
    $(document).ready(function () {

        /*************************/
        //    PRELOADER
        /*************************/
        $(window).on("load", function () {
            $('.loading').delay(500).fadeOut(500);

        });

        /*************************/
        //   NAVBAR
        /*************************/

        //Closes responsive menu when a nav-link is clicked
        $('.nav-link').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#js-navbar',
            offset: 56
        });


        /*************************/
        //   MIXITUP
        /*************************/
        $('.inner-items').mixItUp();


        /*************************/
        //   MAGNIFICPOPUP
        /*************************/
        $('.popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        /*************************/
        //   BACK-TOP
        /*************************/
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 250) {
                $('.back-top').fadeIn(300);
            } else {
                $('.back-top').fadeOut(300);
            }
        });

        $('.back-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 300);
            return false;
        });

    });

        /*************************/
        //   WOW
        /*************************/
        new WOW().init();

        /*************************/
        //   ParticlesJS Config
        /*************************/

        if (typeof particlesJS !== "undefined") {

        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 600
                    }
                },
                "color": {
                    "value": '#ddd',
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#888"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#bbb",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "bottom",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        });
         }

        /*************************/
        //   VEGAS
        /*************************/

        $('.overlay_slider').vegas({
        timer: false,
        animation: ['kenburnsUp', 'kenburnsLeft', 'kenburnsRight'],
        delay: 7000,

        slides: [
            { src: 'img/background/bg.jpg' },
            { src: 'img/background/bg-1.jpg' },
            { src: 'img/background/bg-2.jpg' },
        ]

        });

        /*************************/
        //   END
        /*************************/
   
}(jQuery));