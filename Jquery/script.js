$(document).ready(function(){
  $('.main_btn, .main_btna, a[href="#sheldure"]').on('click', function(evt) {
    $('.overlay').animate(
      {
        opacity:'show'
      }, 1000
    );
    $('.modal').slideDown(1000);
  });
  $('.close').on('click', function() {
    $('.overlay').fadeOut(1000);
    $('.modal').slideUp(1000);
  });
});