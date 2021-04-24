$(function(){
  $('.counter').counterUp({
      delay: 5,
      time: 1000
  });
  $('.fade-text').click(function(){
    $('.show').slideToggle();
  });
  $('.img-iteam').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    speed: 1000,
    prevArrow:'.left',
    nextArrow:'.right',
  });
  $('.banner-overlay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    speed: 1000,
    prevArrow:'.left',
    nextArrow:'.right',
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 1500);
});

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling  > 200) {
        $('.back-to-top').fadeIn(500);
    } 
    else{
        $('.back-to-top').fadeOut(500);
    }
    if (scrolling > 100){
        $('.nav').addClass ('bg');
    }
    else{
        $('.nav').removeClass ('bg');
    }
});
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 60
            }, 1500);
            return false;
        }
    }
});
$(window).on('load', function(){
  $('.preloader').delay(500).fadeOut(500);
});
});
