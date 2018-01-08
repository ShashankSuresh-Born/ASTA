$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });

    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this)
            .children("ul")
            .slideDown("fast");
    });

    $("ul.multi-level [data-toggle=dropdown]").on('click', function() {
        $(".multi-level")
            .find("ul.dropdown-menu")
            .slideUp("fast");
        $(this)
            .next()
            .slideDown("fast");
    });
});