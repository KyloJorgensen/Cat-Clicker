$(document).ready(function() {
	'use strict';
	var listOfCats = {};

	var Cat = function(catName, catPic, catURL) {
		this.numCatClicks = 0;
		this.catName = catName;
		$('#catNames').append('<li><p>' + catName + '</p></li>');
		this.catPic = catPic;
		this.catURL = catURL;
		listOfCats[this.catName] = this;
	};

	Cat.prototype.clickCatImg = function(first_argument) {
		this.numCatClicks++
		$('#displayedCat').children('#numCatClicks').text(this.numCatClicks);
	};

	Cat.prototype.clickCatName = function() {
		$('#displayedCat').empty().append(
			'<p id="numCatClicks">' + this.numCatClicks + '</p>'+
		    '<p id="catName">' + this.catName + '</p>'+
		    '<img src="' + this.catPic + '" alt="' + this.catURL + '">'
	    );
	};

	$('#displayedCat').on('click', 'img', function() {
		clickCatImg($(this).parent().children('#catName').html());
	});

	$('#catNames').on('click', 'p', function(){
		clickCatName($(this).html());
	});

	function clickCatName(catName) {
		$.each(listOfCats, function(key, value){
			if (key == catName) {
				value.clickCatName();
			}
		});
	};

	function clickCatImg(catName) {
		$.each(listOfCats, function(key, value){
			if (key == catName) {
				value.clickCatImg();
			}
		});
	}

	var socks = new Cat('socks', "imgs/socks.jpg", "https://www.flickr.com/photos/poplinre/625069434/in/photostream/");
	var chewie = new Cat('chewie', "imgs/chewie.jpg", "https://www.flickr.com/photos/chewie/2290467335");
	var jetske = new Cat('jetske', "imgs/jetske.jpg", "none");
	var larry = new Cat('larry', "imgs/larry.jpeg", "none");
	var lussy = new Cat('lussy', "imgs/lussy.jpeg", "none");












});