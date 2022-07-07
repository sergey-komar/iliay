$(function () {
$('.slider-block__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev-rigth"></button>',
    nextArrow: '<button type="button" class="slick-next-left"></button>',
});


$('.reviews-slider__cart').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-reviews-left"></button>',
    nextArrow: '<button type="button" class="slick-reviews-rigth"></button>',
 
});


// $('.play-block__popup-link').magnificPopup({
//     disableOn: 700,
//     type: 'iframe',
//     mainClass: 'mfp-fade',
//     removalDelay: 160,
//     preloader: false,

//     fixedContentPos: false
// });

// $('.sliderr__before-after').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     swipe: false
// })

$("#container1").twentytwenty({
    default_offset_pct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'January 2017', // Set a custom before label
    after_label: 'March 2017', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false 
});

$("#container2").twentytwenty({
    default_offset_pct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'January 2017', // Set a custom before label
    after_label: 'March 2017', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false 
});

$("#container3").twentytwenty({
    default_offset_pct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'January 2017', // Set a custom before label
    after_label: 'March 2017', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false 
});
$("#container4").twentytwenty({
    default_offset_pct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'January 2017', // Set a custom before label
    after_label: 'March 2017', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false 
});
$('.slider-after').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-after-left"></button>',
    nextArrow: '<button type="button" class="slick-after-rigth"></button>',
})
});

