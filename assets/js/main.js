$(document).ready(function() {
        // Transition effect for navbar
        // $('.navbar-toggler').change(function(){
        //   $(this).attr("aria-expanded");
        //   console.log($(this).attr("aria-expanded"));
        // });
        $('#collapseDiv').on('shown.bs.collapse', function () {
          $('.navbar').addClass('solid');
         console.log("Opened")
      });
        // var isExpanded = $('.navbar-toggler').
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class

          if($(this).scrollTop() > 20) {

              $('.navbar').addClass('solid');

          } else {

              $('.navbar').removeClass('solid');
          }
          // console.log(isExpanded);
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
