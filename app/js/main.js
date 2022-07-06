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



});