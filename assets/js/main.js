


$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 20) {
              $('.navbar').addClass('solid');
              console.log("main.js");
          } else {
              $('.navbar').removeClass('solid');
          }
        });
        // Scroll To
        $('a[href*="#"]').on('click', function (e) {
        	e.preventDefault();

        	$('html, body').animate({
        		scrollTop: $($(this).attr('href')).offset().top
        	}, 500, 'linear');
        });

        $("body").tooltip({ selector: '[data-toggle=tooltip]' });



});
