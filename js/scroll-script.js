function init() {
    $(".portfolio-btn").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".portfolio-container").offset().top
        }, 600);
    });
}

$(function() {
    init();
});