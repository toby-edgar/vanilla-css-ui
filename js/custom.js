// all custom.js

// psuedocode steps
// 1. set a click event on the mobile menu icon
// 2. once clicked demonstarte jQuery chaining
// 3. finally demonstrate jQuery callback functions
$('document').ready(function(){

// select the mobile menu, add a click, trigger an alert

  $('#mobileMenu').click(function(){
    $('.daily-section').hide(1000, function(){
      $('.map-section').hide(1000, function(){
        $('.favourite-section').hide(1000, function(){
          $('.footer-section').hide(1000, function(){
            $('.mobile-nav').hide(1000);
          });
        });
      });
    });
  });

});
