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

    $('.nav-menu a').click(function (e) {
        var href = $(this).attr('href');
        var section = $(href);
        $('html, body').animate({
            scrollTop: section.offset().top - 100
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });

    const slides = document.querySelectorAll(".sliders .img");
    // slides.forEach((slide, indx) => {
    //     slide.style.transform = `translateX(${indx * 100}%)`;
    // });

    let i = 0;
    setInterval(() => {
        Array.from(slides).forEach((item, index) => {
            // Calculate the translation based on the current index
            const translation = index === i ? 0 : 100 * (index - i);

            // Apply the translation to the current slide
            item.style.transform = `translateX(${translation}%)`;
        });

        // Increment the index for the next iteration
        i = (i + 1) % slides.length;
    }, 2000);
});