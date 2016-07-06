$(document).ready(function() {
	'use strict';

	var Cat = function(data) {
		this.numCatClicks = ko.observable(data.numCatClicks);
		this.catName = ko.observable(data.catName);
		this.catURL = ko.observable(data.catURL); 
		this.nickname = ko.observableArray(data.nickname);	
    	this.catLevel = ko.computed(function() {
    		var title = 'Newborn';
    		var number = this.numCatClicks();
			number >= 10 ? title = 'kitty' : '',
			number >= 20 ? title = 'Teen' : '',
			number >= 30 ? title = 'Adult' : '',
			number >= 40 ? title = 'Senior Cat' : '',
			number >= 50 ? title = 'Ancient of Days' : '';
			return title;
    	}, this);
	};

	var model = {
		listOfCats: [
			{ numCatClicks: 0, catName: 'socks', catURL: "https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480", nickname: ['lucky', 'bro']},
			{ numCatClicks: 0, catName: 'chewie', catURL: "https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640", nickname: ['lucky', 'bro']},
			{ numCatClicks: 0, catName: 'jetske', catURL: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454", nickname: ['lucky', 'bro']},
			{ numCatClicks: 0, catName: 'larry', catURL: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496", nickname: ['lucky', 'bro']},
			{ numCatClicks: 0, catName: 'lussy', catURL: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426", nickname: ['lucky', 'bro']}
		]
	};

	var VeiwModel = function() {
		var self = this;

		this.catList = ko.observableArray([]);

		model.listOfCats.forEach(function(catItem) {
			self.catList.push(new Cat(catItem));
		});

		this.currentCat = ko.observable(this.catList()[0]);

		this.incrementCounter = function() {
			this.numCatClicks(this.numCatClicks() + 1);
		};

		this.setCat = function(clickCat) {
			self.currentCat(clickCat);
		};
	};

	ko.applyBindings(new VeiwModel());

});