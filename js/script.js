$(document).ready(function() {
	'use strict';
	var Model = function() {
		this.listOfCats = [
			{ numCatClicks: 0, catName: 'socks', catPic: "imgs/socks.jpg", catURL: "https://www.flickr.com/photos/poplinre/625069434/in/photostream/"},
			{ numCatClicks: 0, catName: 'chewie', catPic: "imgs/chewie.jpg", catURL: "https://www.flickr.com/photos/chewie/2290467335"},
			{ numCatClicks: 0, catName: 'jetske', catPic: "imgs/jetske.jpg", catURL: "none"},
			{ numCatClicks: 0, catName: 'larry', catPic: "imgs/larry.jpeg", catURL: "none"},
			{ numCatClicks: 0, catName: 'lussy', catPic: "imgs/lussy.jpeg", catURL: "none"},
			{ numCatClicks: 0, catName: 'cowboy', catPic: "imgs/cowboy.jpg", catURL: "none"}
		];
		this.currentCat = 0;
	};

	var Veiw = function() {
		this.addCats = function(cats) {
			for (var i = 0; i < cats.length; i++) {
				$('#catNames').append('<li><p>' + cats[i].catName + '</p></li>');
			}
		};

		$('#catNames').on('click', 'p', function(){
			controller.clickCatName($(this).html());
		});

		$('#displayedCat').on('click', 'img', function() {
			controller.clickCatImg($(this).parent().children('#catName').html());
		});

		this.numCatClicks = function(numCatClicks) {
			$('#displayedCat').children('#numCatClicks').text(numCatClicks);
		};

		this.generateCat = function(cat) {
			$('#displayedCat').empty().append(
				'<p id="numCatClicks">' + cat.numCatClicks + '</p>'+
			    '<p id="catName">' + cat.catName + '</p>'+
			    '<img src="' + cat.catPic + '" alt="' + cat.catURL + '">'
		    );
		};

	};

	var Controller = function() {
		var model = new Model();
		var veiw = new Veiw();
		veiw.addCats(model.listOfCats);
		veiw.generateCat(model.listOfCats[model.currentCat]);

		this.clickCatName = function(catName) {
			for (var i = 0; i < model.listOfCats.length; i++) {
				if (model.listOfCats[i].catName == catName) {
					veiw.generateCat(model.listOfCats[i]);
					model.currentCat = i;
				}
			}
		};

		this.clickCatImg = function(catName) {
			model.listOfCats[model.currentCat].numCatClicks++;
			veiw.numCatClicks(model.listOfCats[model.currentCat].numCatClicks)
		}
	};

	var controller = new Controller();
});