$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });

    // $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $(this)
    //         .children("ul")
    //         .slideDown("fast");
    // });

    $('.first-level').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this)
            .next()
            .slideToggle();
        $('.circle-plus').toggleClass('opened');
    });

    $("ul.multi-level [data-toggle=dropdown]").on('click', function() {
        // $(".dropdown-menu .__content")
        //     .slideUp("fast");
        if ($(this).next().is(":visible")) {
            $(this)
                .next()
                .slideToggle();
        } else {
        	$(".dropdown-menu .__content")
        		.slideUp("fast");
            $(this)
                .next()
                .slideDown("fast");
        }
    });

    $(".multi-level").on("show.bs.collapse hide.bs.collapse", function() {
        $('.circle-plus').toggleClass('opened');
    });
});