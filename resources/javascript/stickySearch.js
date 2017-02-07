$(document).ready(function() {
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('#stickySearch').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 151) {
      $('#stickySearch').removeClass('navbar-fixed');
    }
  });
});