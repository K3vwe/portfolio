const responsive = {
    0: {
        items: 1
    },

    120: {
        items: 1
    },
    240: {
        items: 2
    },
    360: {
        items: 3
    },
    480: {
        items: 4
    },
    600: {
        items: 5
    },
    720: {
        items: 6
    }

}

$(function(){

    // Pick the navigation and header-body elements
    $navigation = $('.navigation');
    $header_body = $('.header-body');

    // Select the Hamburger Menu
    $hamburger = $('.hamburger');

    // HAmburger Clickevent
    $hamburger.click(function(){
        $navigation.toggleClass('showMenu');
        $header_body.toggleClass('collapse');
    })
    
    // Owl carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });



    // Clock to Scroll to top
    $('.move-up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    })

    // AOS Instance
    AOS.init();
});