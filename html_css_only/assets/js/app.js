$(function(){
	
  var wh = $(window).height();
  var pagetop = $('.pagetop');
  $('a[href^="#"]').on("click",function() {
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });  
  
  $('.main a').on('click',function(){
    $('.main').addClass('moveBg');
  });

  $(window).on("scroll", function(){
    if ($(this).scrollTop() > 2000) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
    if($(this).scrollTop() >= wh){
      $('.main').removeClass('moveBg');
    }
  }).scroll();

});