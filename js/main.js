(function ($) {
 "use strict";
  /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(4000); // set duration in brackets    
});


	/* =====================
			 Menu Stick
	======================== */
		var s = $("#sticker");
		var pos = s.position();					   
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos > pos.top) {
			s.addClass("stick");
			} else {
			s.removeClass("stick");	
			}
		});	


	/* ==================
	   OnePageNav js
	===================== */
		 $("ul#navigation").onePageNav();	
		jQuery(function($) {
			$('ul#navigation a').bind('click', function(event) {
				var $anchor = $(this);
				$('html').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 70
				}, 1000);
				event.preventDefault();
			});
		});   
  

	/* ==============
		jQuery ui 
	=================*/
	$( "#accordion" ).accordion();
	
	/* ===============
		Bx Slider
	=================*/
	$('.bxslider').bxSlider({
		  mode: 'fade',
		  captions: true,
		  auto: true,
		  autoStart: true,
		});
		
	 /*================ 
			isotope
		================*/
	var $krisha = $('.myallproject').isotope({
	  itemSelector: '.grid-item'
	});
	$(".work-menu button").click(function(){			
		var clickMenu = $(this).attr('data-filter');
		$krisha.isotope({
			filter:clickMenu
		})
	});
	$(".work-menu button").click(function(){
		$(".work-menu button").removeClass("activemenu");
		$(this).addClass("activemenu");
		
	});
	
	/* ==============
		lightbox 
	=================*/
	lightbox.option({
			  'resizeDuration': 300,
			  'wrapAround': true
			});
 
	/* =================
		owlCarousel
	====================*/
	$('.active-client').owlCarousel({
				loop:true,
				autoplay:true,
				autoplayTimeout:2000,
				nav:false,
				responsive:{
					0:{
						items:2
					},
					600:{
						items:5
					},
					1000:{
						items:6
					}
				}
			});
			
			
        /*==================
	       Scroll Top btn
        =====================*/
            $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').fadeIn().addClass('opacity');
            } else {
            $('.scroll-up-btn').fadeOut();
            }
            });
            $('.scroll-up-btn').on('click', function () {
            $("html, body").animate({
            scrollTop: 0
            }, 1000);
            return false;
            });
			
			
})(jQuery); 