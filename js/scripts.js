$(document).ready(function(){


  $('section').horizon();

// If you do not want to include another plugin, TouchSwipe, you can set it to false in the default options by passing in the option as false.
//$('section').horizon({swipe: false});

$(document).on('click', '.go-to-1', function () {
    $(document).horizon('scrollTo', 'section-section1');



  });
    });
