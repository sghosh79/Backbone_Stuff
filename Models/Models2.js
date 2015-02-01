/* Creating Models */

var Song = Backbone.Model.extend({
		initialize: function(){ //initialize: function() like a constructor
			console.log("A new song has been created.");

	}
});

var song = new Song();


/* Working With Attributes */

var Song = Backbone.Model.extend();
var song = new Song();
song.set("title", "Blue in Green")
song.set({ //using JSON
	artist: "Miles Davis",
	publishYear: 1959
});

/* Set attributes when initializing a model object */

var Song = Backbone.Model.extend();
var song = new Song({
	title: "Blue in Green"
	artist: "Blue in Green"
	publishYear: 1959

});

/* var newSong = new Song({ title: "Alfie" }); */

/* instantiating a Song object but not setting a genre, it will have a default value */

var Song = Backbone.Model.extend({
		defaults: {
			genre: "Jazz"
		}
});

var song = new Song();
song.set("title", "Blue in Green");
song.set({ 
	artist: "Miles Davis",
	publishYear: 1959
});

/* Working with Attributes */

song.set("title", "Blue in Green");

var title = song.get("title");

var hasTitle = song.has("title");

song.unset("title");

song.clear();
