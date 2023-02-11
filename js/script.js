$(() => {
  $('a[href^="#"]').on('click', () => {
    const header = $('header').outerHeight();
    const speed = 500;
    const href = $(this).attr('href');
    const target = $(href === '#' || href === '' ? 'html' : href);
    const position = target.offset().top - header;

    $('html, body').animate({ scrollTo: position }, speed, 'swing');
  });
});
