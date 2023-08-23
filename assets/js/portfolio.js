$('.filters ul li').click(function () {
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
});

var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
        columnWidth: ".all"
    }
})

$(document).ready(function () {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function (openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});