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
