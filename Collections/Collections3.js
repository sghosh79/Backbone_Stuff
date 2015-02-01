// Connecting to the Server

var Songs = Backbone.Collection.extend({
	model: Song
	url: "/api/songs"
}); 

var songs = new Songs();
songs.fetch();

GET /api/songs

// Connecting to the Server

var songs = new Songs();
songs.fetch({
	data: {
		page: 2
	},
	success: function(){},
	error: function(){} 
});

GET /api/songs?page=2