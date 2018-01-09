$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });

    $('.first-level').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this)
            .next()
            .slideToggle();
        $('.circle-plus').toggleClass('opened');
    });

    $("ul.multi-level [data-toggle=dropdown]").on('click', function() {
        if ($(this).next().is(":visible")) {
            $(this)
                .next()
                .slideToggle();
        } else {
            $(".dropdown-menu .__content")
                .slideUp("slow");
            $(this)
                .next()
                .slideDown("slow");
        }
        $(this)
        	.find("i")
            .toggleClass("chevron-rotate");
    });

    $(".multi-level").on("show.bs.collapse hide.bs.collapse", function() {
        $('.circle-plus').toggleClass('opened');
    });
});