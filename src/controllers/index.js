// Style CSS-SCSS
import '../assets/css/style.css';
import '../assets/scss/style.scss';
// Owl Carousel
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../../node_modules/owl.carousel/dist/owl.carousel.min.js';
// SweetAlert
import '../../node_modules/sweetalert/dist/sweetalert.min.js';

// ******* //
// quanLyNguoiDung //
// ******* //
// import '../../src/modal/nguoiDung.js';
// import '../../src/services/nguoiDungServices.js';
// import '../../src/controllers/quanLyNguoiDung/validationDangKy.js';
// import '../../src/controllers/quanLyNguoiDung/dangKy.js';



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
// $(window).resize(function () {
//     if ($(window).width() >= 740 && $(window).width() < 1200) {
//         $('.phone_contact').hide();
//     } else {
//         $('.phone_contact').show();
//     }
// });

// Owl-Carousel
initHeroSlider();

function initHeroSlider() {
    if ($('.hero_slider').length) {
        let owl = $('.hero_slider');

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
            let animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            _elem.each(function () {
                let $elem = $(this);
                let $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                $elem.addClass($animationType).one(animationEndEvent, function () {
                    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                });
            });
        }

        // Fired before current slide change
        owl.on('change.owl.carousel', function (event) {
            let $currentItem = $('.owl-item', owl).eq(event.item.index);
            let $elemsToanim = $currentItem.find("[data-animation-out]");
            setAnimation($elemsToanim, 'out');
        });

        // Fired after current slide has been changed
        owl.on('changed.owl.carousel', function (event) {
            let $currentItem = $('.owl-item', owl).eq(event.item.index);
            let $elemsToanim = $currentItem.find("[data-animation-in]");
            setAnimation($elemsToanim, 'in');
        })

        // Handle Custom Navigation
        if ($('.hero_slider_left').length) {
            let owlPrev = $('.hero_slider_left');
            owlPrev.on('click', function () {
                owl.trigger('prev.owl.carousel');
            });
        }

        if ($('.hero_slider_right').length) {
            let owlNext = $('.hero_slider_right');
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

////////////////
// Get the modal
////////////////
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#signup").click(function () {
    $(".message").css("transform", "translateX(100%)");
    if ($(".message").hasClass("login")) {
        $(".message").removeClass("login");
    }
    $(".message").addClass("signup");
});

$("#login2").click(function () {
    $(".message").css("transform", "translateX(0)");
    if ($(".message").hasClass("login")) {
        $(".message").removeClass("signup");
    }
    $(".message").addClass("login");
});

////////////////////////////
/////****** MAIN ******/////
////////////////////////////

