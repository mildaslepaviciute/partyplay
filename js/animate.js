$(document).ready(function() {

    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
      offset: '80%'
    })

    $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated pulse');
    }, {
      offset: '90%'
    })



});