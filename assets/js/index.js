!(function($) {
	"use strict";
	
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

})(jQuery);