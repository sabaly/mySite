!(function($) {
	"use strict";
	
	flagAnimation();	

	/*
		Actions from potfolio
	*/
	$(".mobile-nav-bar").hide();
	$(".toggleMenu").click(function() {
		$(".mobile-nav-bar").slideDown(1500);

		if($(this).hasClass('icofont-close')) {
			$(".mobile-nav-bar").slideUp(1500);
			$(this).toggleClass("icofont-close icofont-navigation-menu");
		}else {
			$(this).toggleClass("icofont-navigation-menu icofont-close");
		}
		

	});

	/*
		action from index.html
	*/
	$(".cvbtn").click(function() {
		location.replace('cv.html');
	});
	$(".pbtn").click(function() {
		location.replace('portfolio.html');
	});


	$(document).on('click', '.nav-bar a, .mobile-nav-bar a, .scroll_down', function(e) {
		e.preventDefault();

		var target = $(this.hash);

		if (target.length) {

			var scrollto = target.offset().top;
			var scrolled = 20;

			  if ($('#header').length) {
			  scrollto -= $('#header').outerHeight()

			  if (!$('#header').hasClass('header-scrolled')) {
				scrollto += scrolled;
			  }
			}

			if ($(this).attr("href") == '#header') {
			  scrollto = 0;
			}

			$('html, body').animate({
			  scrollTop: scrollto
			}, 1500, 'easeInOutExpo');

			return false;
		} else {
			if($(this).attr('href') != undefined)
				location.assign($(this).attr('href'));
		}
	});
	
})(jQuery);

function flagAnimation() {
	/*
		create flag animation
	*/
	let flag = $('<div/>', {
		class: 'flag'
	});

	$('<div/>', {
		class: 'bande-verte'
	}).appendTo(flag);

	let jaune = $('<div/>', {
		class: 'bande-jaune'
	}).appendTo(flag);

	$('<i/>', {
		class: 'icofont-star etoile'
	}).appendTo(jaune);

	$('<div/>', {
		class: 'bande-rouge'
	}).appendTo(flag);

	$('body').append(flag);
}
