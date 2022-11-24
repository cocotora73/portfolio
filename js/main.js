function FixedAnime() {
    const headerH = $('.header').outerHeight(true);
    const scroll = $(window).scrollTop();

    if(scroll >= headerH) {
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
}

$(window).scroll(function () {
    FixedAnime();
});

$('a[href^="#"]').on('click', function() {
    const nav = $('.nav');
    const gap = nav.outerHeight();
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - gap;

    $("html, body").animate({
        scrollTop: position
    }, speed, "swing");
    return false;
});