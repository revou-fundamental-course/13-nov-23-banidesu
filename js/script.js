$(function () {
    $("#hamburger-menu").click(function (e) {
        e.stopPropagation();
        $(".nav-menu").toggleClass('show');
    });

    $(document).click(function (e) {
        var container = $(".nav-menu");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('show');
        }
    });

    $('.nav-menu a').click(function(e){
        var href = $(this).attr('href');
        var section = $(href);
        $('html, body').animate({
            scrollTop: section.offset().top - 100
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
});