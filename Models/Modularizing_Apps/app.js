define([
	'underscore', //assumes these files are in the same folder as main.js with the same name; do the global configurations in main.js
	'backbone',
	'models/song',
	'views/songView'], function(_, Backbone, Song, SongView){

		var initialize = function(){

	var song = new Song({ title: "Blue in Green"});

	var songView = new SongView({ el: "#container", model: song });
	
	songView.render();


		}

		return {

			initialize: initialize

		};


});

