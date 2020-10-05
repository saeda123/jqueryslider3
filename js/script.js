$(function () {

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-arrow-circle-right next_arr"></i>',
        prevArrow: '<i class="fas fa-arrow-circle-left prev_arr"></i>',
        dots: true,
    });

    $('.banner_item1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-arrow-circle-right next_arr"></i>',
        prevArrow: '<i class="fas fa-arrow-circle-left prev_arr"></i>',
        dots: true,
    });


    $('.banner_slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-arrow-circle-right next_arr"></i>',
        prevArrow: '<i class="fas fa-arrow-circle-left prev_arr"></i>',
        dots: true,
    });


    $('.center_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-arrow-circle-right next_arr"></i>',
        prevArrow: '<i class="fas fa-arrow-circle-left prev_arr"></i>',
        dots: true,
        centerMode: true,
        centerPadding: 0,
    });


    $('.banner2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: true,
        asNavFor: '.banner_item3',
    });
    $('.banner_item3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.banner2',
        autoplay: true,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        nextArrow: '<i class="fas fa-arrow-circle-right next_arr"></i>',
        prevArrow: '<i class="fas fa-arrow-circle-left prev_arr"></i>',
    });

    var containerEl = document.querySelector('.container');

    var mixer = mixitup(containerEl);

    $('.main_menu ul li').on('click', function () {
        $('.main_menu ul li').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.venobox').venobox();


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    $('#time').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%Y year %W weeks %D days %H hour %M minute %S second'));
    });
    $('#year').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%Y year'));
    });
    $('#month').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%M month'));
    });
    $('#week').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%W week'));
    });
    $('#day').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%D day'));
    });
    $('#hour').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%H hour'));
    });
    $('#minute').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%M minute'));
    });
    $('#second').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%S second'));
    });


    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 20,
    });

    $('.water').ripples({
        resolution: 512,
        dropRadius: 50,
        perturbance: 0.04,
    });

    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(100);


    });


    $('.bk_to_top').on('click', function () {

        $('html,body').animate({
            scrollTop: 0,
        }, 2000)
    });

    $(window).on('scroll', function () {
        var button = $(this).scrollTop();

        if (button > 150) {
            $('.bk_to_top').fadeIn();
        } 
        else {
            $('.bk_to_top').fadeOut();
        }


    });


//    var navoff = $('.main_menu').offset().top;
//
//    $(window).scroll(function () {
//
//        var scrolling = $(this).scrollTop();
//
//        if (scrolling > navoff) {
//            $('.main_menu').addClass('menu_fix');
//        } else {
//            $('.main_menu').removeClass('menu_fix');
//        }
//
//    });



});
