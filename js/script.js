$(document).ready(function() {
	'use strict';
	$('.catPic').click(function() {
		var numCatClicks = $(this).children('.numCatClicks').html();
		numCatClicks++;
		$(this).children('.numCatClicks').text(numCatClicks);
	});
















});