$(function(){
  $('.Toggle').click(function() {
  　　$(this).toggleClass('active');
      $('.btns').toggleClass('appear')
  　if ($(this).hasClass('active')) {
  　　$('.NavMenu').addClass('active');　
  　} else {
  　　$('.NavMenu').removeClass('active');
  　}
  　});
});
