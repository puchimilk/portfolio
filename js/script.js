$(function () {  
  $('a[href^="#"]').on('click', function () {
    var header = $('header').outerHeight();
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top - header;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
      return false;
  });
});