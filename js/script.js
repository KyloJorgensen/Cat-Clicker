$(document).ready(function() {
	'use strict';
	var VeiwModel = function() {
		this.numCatClicks = ko.observable(0);
		this.catName = ko.observable('socks');
		this.catLevel = ko.observable('New Born');
		this.catURL = ko.observable('https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480'); 

		this.incrementCounter = function() {
			this.numCatClicks(this.numCatClicks() + 1);
			this.numCatClicks() >= 10 ? this.catLevel('kitty') : '',
			this.numCatClicks() >= 20 ? this.catLevel('Teen') : '',
			this.numCatClicks() >= 30 ? this.catLevel('Adult') : '',
			this.numCatClicks() >= 40 ? this.catLevel('Senior Cat') : '',
			this.numCatClicks() >= 50 ? this.catLevel('Ancient of Days') : '';
		};
		this.nickname = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);

	};

	ko.applyBindings(new VeiwModel());






	var model = {
		listOfCats: [
			{ numCatClicks: 0, catName: 'socks', catURL: "https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480"},
			{ numCatClicks: 0, catName: 'chewie', catURL: "https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640"},
			{ numCatClicks: 0, catName: 'jetske', catURL: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"},
			{ numCatClicks: 0, catName: 'larry', catURL: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"},
			{ numCatClicks: 0, catName: 'lussy', catURL: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426"}
		],
		currentCat: 0
	};

	var view = {
		init: function() {
			$('#catNames').on('click', 'p', function(){
				controller.clickCatName($(this).html());
			});

			$('#displayedCat').on('click', 'img', function() {
				controller.clickCatImg($(this).parent().children('#catName').html());
			});

			$('#admin-button').click(function() {
				$('#admin-area').show();
				controller.adminButtonClick();
			});

			$('#admin-area').submit(function() {
				event.preventDefault();
				var catName = $('#admin-catName').val(); 
				var URL = $('#admin-URL').val(); 
				var numCatClicks = $('#admin-numCatClicks').val(); 
				controller.changeCatDetails(catName, URL, numCatClicks);
				$('#admin-area').hide();
			})
			.on('click', '#admin-cancel', function() {
				$('#admin-area').hide();
			});
		},

		addCats: function(cats) {
			for (var i = 0; i < cats.length; i++) {
				$('#catNames').append('<li><p>' + cats[i].catName + '</p></li>');
			}
		},

		numCatClicks: function(numCatClicks) {
			$('#displayedCat').children('#numCatClicks').text(numCatClicks);
		},

		showCurrentCatVals: function(currentCat) {
			$('#admin-catName').val(currentCat.catName); 
			$('#admin-URL').val(currentCat.catURL); 
			$('#admin-numCatClicks').val(currentCat.numCatClicks); 
		},

		generateCat: function(cat) {
			$('#displayedCat').empty().append(
				'<p id="numCatClicks">' + cat.numCatClicks + '</p>'+
			    '<p id="catName">' + cat.catName + '</p>'+
			    '<img src=' + cat.catURL + ' alt="' + cat.catURL + '">'
		    );

		}
	};

	var controller = {
		init: function() {
			view.init();
			view.addCats(model.listOfCats);
			view.generateCat(model.listOfCats[model.currentCat]);			
		},

		clickCatName: function(catName) {
			for (var i = 0; i < model.listOfCats.length; i++) {
				if (model.listOfCats[i].catName == catName) {
					view.generateCat(model.listOfCats[i]);
					model.currentCat = i;
				}
			}
		},

		clickCatImg: function(catName) {
			model.listOfCats[model.currentCat].numCatClicks++;
			view.numCatClicks(model.listOfCats[model.currentCat].numCatClicks)
		},

		adminButtonClick: function() {
			view.showCurrentCatVals(model.listOfCats[model.currentCat]);
		},

		changeCatDetails: function(catName, URL, numCatClicks) {
			model.listOfCats[model.currentCat].catName = catName;
			model.listOfCats[model.currentCat].catURL = URL;
			model.listOfCats[model.currentCat].numCatClicks = numCatClicks;
			view.generateCat(model.listOfCats[model.currentCat]);
		}
	};

	// controller.init();
});