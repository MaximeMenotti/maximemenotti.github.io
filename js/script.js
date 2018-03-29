jQuery(function($) {
    function scrollToPosition(evt) {
        evt.preventDefault();
        var target = $(evt.currentTarget).attr('href');
        console.log(target);
        $('html, body').animate({
            scrollTop: $(target).offset().top - 20
        }, 'slow');
    }

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $.fn.displaynone = function () {
        $(this).addClass('display-none');
        $(this).removeClass('display');
    };

    $.fn.display = function () {
        $(this).addClass('display');
        $(this).removeClass('display-none');
    };

    $.fn.setVisible = function () {
        $(this).addClass('visible');
        $(this).removeClass('hidden');
    };

    $.fn.setHidden = function () {
        $(this).addClass('hidden');
        $(this).removeClass('visible');
    };

    $('.accordion').click(function (evt) {
        var pannel = $(evt.currentTarget).next();
        if (pannel.is(':hidden')) {
            pannel.slideDown('slow');
            pannel.parent().toggleClass('active');
        } else {
            pannel.slideUp('slow');
            pannel.parent().removeClass('active');
        }
    });

    $('.menu a').click(function(evt) {
        scrollToPosition(evt);
    });
    
    $(window).on('ready resize scroll', function() {
        $('.week > p, .week .brick, .teaser').each(function() {
            if ($(this).isInViewport()) {
                $(this).setVisible();
            }
        });
    });

    $(window).on('load', function() {
        $('.desktop .week > p, .desktop .week .brick, .teaser').each(function () {
            if (!$(this).isInViewport()) $(this).setHidden();
        });
    });

    $(document).ready(function() {
        $('.mobile .week').displaynone();
        $('#w01.week').display();
        $('#week-select').change(function () {
            $('.mobile .week').displaynone();
            var week = $("#" + $('#week-select').val());
            week.display();
        });
    });

    $('#conseil-link').on('click', function(e){
        e.preventDefault();
        $('.container-program').displaynone();
        $('.container-advice').display();

        $(this).addClass('active');
        $('#program-link').removeClass('active');
        return false;
    });

    $('#program-link').on('click', function(e){
        e.preventDefault();
        console.log("hey");
        $('.container-advice').displaynone();
        $('.container-program').display();

        $(this).addClass('active');
        $('#conseil-link').removeClass('active');
        return false;
    });
});