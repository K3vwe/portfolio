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
});