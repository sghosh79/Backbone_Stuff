#######################################
Creating Routers
#######################################

var AppRouter = Backbone.Router.extend({
	routes: {
			“albums”: “showAlbum”
	},

	showAlbum: function(){
				// Usually get a model or collection from the server,
				// pass it to the view and then render the view.
		}
});

var router = new AppRouter();

// Tell Backbone to start monitoring address changes
Back.history.start();


#######################################
Route Patterns
#######################################

// Normal route
//
// albums

var AppRouter = Backbone.Router.extend({
			routes: {
					“albums”: “showAlbum”
		},	

		showAlbum: function(){
		}	
});

// Route with parameters
//
// albums/1/songs/2

var AppRouter = Backbone.Router.extend({
			routes: {
				“albums/:albumId/songs/:songId”: “showSong”
			},
			
			showSong: function(albumId, songId){
			}
});

// Route with a splat
//
// download/folderA/folderB/fileC

var AppRouter = Backbone.Router.extend({
			routes: {
					“download/url”: “download”
			},

			download: function(url){			
			}
});


#######################################
Navigation
#######################################

router.navigate(url, { trigger: true });