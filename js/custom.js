/* Show and Hide NavBar */

$(document).ready(function ( ) {
        'use strict';

              $(window).scroll(function( ){
                      'use strict';

                      if( $ (window).scrollTop( ) < 80 ){

                                $('.navbar').css ({
                                        'margin-top' : '-100px',
                                        'opacity' : '0'
                                });

                      }
                      else {

                              $('.navbar').css({
                                    'margin-top' : '0px',
                                    'opacity' : '1'
                              });
                      }
              });
});

/* Smooth Scrolling */

$(document).ready(function( ){
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});

/*Counter*/

$(document).ready(function( ){
  $('.counter-num').counterUp({
    delay: 15,
    time: 1000
});
});
