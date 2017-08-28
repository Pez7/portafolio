// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

//funciones proyectos
    $('#translab').click(function(){
        document.location.href = "https://github.com/Pez7/trans-lab";
    });
    $('#trans-demo').click(function(){
        document.location.href = "https://pez7.github.io/trans-lab/";
    });
    $('#dark').click(function() {
        document.location.href = "https://github.com/Pez7/dark-sky-lab";
    });
    $('#dark-demo').click(function() {
        document.location.href = "https://pez7.github.io/dark-sky-lab/index.html";
    });
    $('#to-do').click(function() {
        document.location.href = "https://github.com/Pez7/todo-jquery";
    });
    $('#list-demo').click(function() {
        document.location.href = "https://pez7.github.io/todo-jquery/";
    });
    $('#lyft').click(function() {
        document.location.href = "https://github.com/Nat-Fox/lyft-app";
    });
    $('#lyft-demo').click(function() {
        document.location.href = "https://nat-fox.github.io/lyft-app/";
    });
    $('#pelis').click(function() {
        document.location.href = "https://github.com/sagicary/mis-pelis";
    });
    $('#pelis-demo').click(function() {
        document.location.href = "https://sagicary.github.io/mis-pelis/";
    });
    $('#dribbble').click(function() {
        document.location.href = "https://github.com/nanynn/dribbble-lab";
    });
    $('#dribbble-demo').click(function() {
        document.location.href = "https://nanynn.github.io/dribbble-lab/";
    });
    $('#sumito').click(function() {
        document.location.href = "https://github.com/Pez7/landing-sumo";
    });
    $('#sumito-demo').click(function() {
        document.location.href = "https://pez7.github.io/landing-sumo/";
    });
    $('#appLove').click(function() {
        document.location.href = "https://github.com/Pez7/app-love-flex-";
    });
    $('#app-demo').click(function() {
        document.location.href = "https://pez7.github.io/app-love-flex-/";
    });
    $('#bunny').click(function() {
        document.location.href = "https://github.com/Pez7/bunny-love";
    });
    $('#bunny-demo').click(function() {
        document.location.href = "https://pez7.github.io/bunny-love/";
    });
});