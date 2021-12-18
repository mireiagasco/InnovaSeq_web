$(".nav-link").on("click", function () {
    $(".nav-link.active").removeClass("active");
    $(this).addClass("active");
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top-button').addClass("visible");
    } else {
        $('.top-button').removeClass("visible");
    }
});

