// products slider

$('.products').owlCarousel({
    navigation : true,
    loop: true,
    autoplay: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2,
            margin: 15
        },
        1000: {
            items: 3
        }
    }
})

// offer slider

$('.offer-prod').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    nav: false,
    dots: false,
    margin: 20,
})

// blog home slider

$('.blog').owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        480: {
            items: 2,
            margin: 15
        },
        767: {
            items: 3,
            margin: 20
        },
        991: {
            items: 3
        }
    }
})

// blog single slider

$('.blog-single').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    margin: 20,
})

// testimonial slider

$('.testimonial').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    margin: 0,
})

// portfolio slider

$('.port-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2,
            margin: 15
        },
        1000: {
            items: 4
        }
    }
})
