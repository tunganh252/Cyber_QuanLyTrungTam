import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
// Style CSS-SCSS
import '../assets/css/style.css';
import '../assets/scss/style.scss';
// Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Owl Carousel
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../../node_modules/owl.carousel/dist/owl.carousel.min.js';
// =================================================================================== //

// Change icon menu bar
$('.navbar-toggler-icon1').click(function () {
    $('.navbar-toggler-icon1').css({
        'display': 'none',
    })
    $('.navbar-toggler-icon2').css({
        'display': 'block'
    })
})
$('.navbar-toggler-icon2').click(function () {
    $('.navbar-toggler-icon2').css({
        'display': 'none'
    })
    $('.navbar-toggler-icon1').css({
        'display': 'block'
    })
})

// Show / hide block ==phone==
$(window).resize(function () {
    if ($(window).width() >= 740 && $(window).width() < 1200) {
        $('.phone_contact').hide();
    } else {
        $('.phone_contact').show();
    }
});

// Owl-Carousel
initHeroSlider();

function initHeroSlider() {
    if ($('.hero_slider').length) {
        var owl = $('.hero_slider');

        owl.owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 2000,
            autoplay: false,
            nav: false,
            dots: false,
            autoplaySpeed: 5000,
            responsive: {
                0: {
                    dots: true
                },
                576: {
                    dots: false
                }
            }
        });


        // add animate.css class(es) to the elements to be animated
        function setAnimation(_elem, _InOut) {
            // Store all animationend event name in a string.
            // cf animate.css documentation
            var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            _elem.each(function () {
                var $elem = $(this);
                var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                $elem.addClass($animationType).one(animationEndEvent, function () {
                    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                });
            });
        }

        // Fired before current slide change
        owl.on('change.owl.carousel', function (event) {
            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-out]");
            setAnimation($elemsToanim, 'out');
        });

        // Fired after current slide has been changed
        owl.on('changed.owl.carousel', function (event) {
            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-in]");
            setAnimation($elemsToanim, 'in');
        })

        // Handle Custom Navigation
        if ($('.hero_slider_left').length) {
            var owlPrev = $('.hero_slider_left');
            owlPrev.on('click', function () {
                owl.trigger('prev.owl.carousel');
            });
        }

        if ($('.hero_slider_right').length) {
            var owlNext = $('.hero_slider_right');
            owlNext.on('click', function () {
                owl.trigger('next.owl.carousel');
            });
        }
    }
}

// Active item navbar
$('.nav-item .nav-link').click(function () {
    $('.nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
});


////////////////////////////
/////****** MAIN ******/////
////////////////////////////