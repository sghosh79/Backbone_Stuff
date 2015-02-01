/* Connecting to the Server */
/*Persistent Operations */

//fetch() - GET
//save() - POST/PUT
//destroy() - DELETE


//urlRoot
var Song = Backbone.Model.extend({
	urlRoot: "/api/songs"
});


//Fetching a Model
var song = new Song({ id: 1});
song.fetch();

GET /api/songs/1


//Updating a Model
var song = new Song({ id: 1});
song.fetch();
...
song.set("title", "newTitle");
song.save();

PUT /api/songs/1


//Inserting a Model
var song = new Song();
song.set("title", "Title");
song.save();

POST /api/songs


//Deleting a Model
var song = new Song({ id: 1 });
song.destroy();

DELETE /api/songs/1


//idAttribute
var Song = Backbone.Model.extend({
	idAttribute: "songId"
});

var song = new Song({ songId: 1});


//Callbacks
song.fetch({
		success: function(){}
		error: function(){}
});

song.destroy({
		success: function(){},
		error: function(){}
});

song.save({}, { //hash of attributes to set and save
	success: function(){}
	error: function(){}
});