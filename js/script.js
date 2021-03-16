$(function () {
    if (window.matchMedia('(max-width: 800px)').matches) {
        $('.btn-label').on('click', function () {
            $('.menu-content').slideToggle();
            $('.menu-content').toggleClass('active');
        });
        $('a[href^="#"]').on('click', function () {
            $('.menu-content').slideToggle();
            $('.menu-content').removeClass('active');
            $('#btn-toggle').prop('checked', false);
            console.log('close');
        });
    }
    $('a[href^="#"]').on('click', function () {
        var header = $('header').outerHeight();
        var speed = 500;
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top - header;
        $('html, body').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
    deSVG('.svg', true);
});