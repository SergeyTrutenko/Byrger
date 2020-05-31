$(document).ready(function() {
    // setTimeout(function() {
    //     $('.holder').fadeOut(200);
    // }, 1500);

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });

    $('.mouse-btn').click(function() {
        $('html, body').animate({
            scrollTop: $(this).closest('section').next().offset().top
        }, 1000);
    });

    $('.single-product--slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.products--slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //back to top
    $('.to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 235) {
            $('.main-screen .logos .img').addClass("move");
            $('header').addClass('show');
            $('.main-screen .logos p').addClass('move');
        } else {
            $('.main-screen .logos .img').removeClass("move");
            $('header').removeClass('show');
            $('.main-screen .logos p').removeClass('move');
        }
    });


    if ( $(window).width() >=992) {
        AOS.init({ once: true });
    } else {
        $('*[data-aos]').removeAttr('data-aos');
    }


    // count
    $(document).on('click', '.plus', function() {
        var count = Number($(this).parent().find('span').text());
        count = count + 1;
        $(this).parent().find('span').text(count);
        $(this).parent().find('input[name="quantity"]').val(count);
    });
    $(document).on('click', '.minus', function() {
        var count = Number($(this).parent().find('span').text());
        if(count > 1) {
            count = count - 1;
            $(this).parent().find('span').text(count);
            $(this).parent().find('input[name="quantity"]').val(count);
        }
    });
});

