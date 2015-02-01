//Routers

var AppRouter = Backbone.Router.extend({
		routers: {
				//matches albums
				"albums": "viewAlbums",
				
				// matches albums/1234
				"albums/:albumId": "viewAlbumById",
				
				// any other routes
				"*other": "defaultRoute"
		},

		viewAlbumById: function(albumId){

		},

		viewAlbums: function(){
				var view = new AlbumsView({ el: "#container"});
				view.render();
		}, 

		defaultRoute: function(other){
		}
});

var router = new AppRouter();
Backbone.history.start();

//To create SPAs, in the html page we need to remove the traditional hyperlinks as they cause a complete page reload
//<nav id="nav">
// <ul>
// 	<li data-url="albums">Albums</li>
// 	<li data-url="artists">Artists</li>
// 	<li data-url="genres">Genres</li>
// </ul>
// </nav>

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
	events: {
			"click": "onClick"
	},

	onClick: function(e){
			var $li = $(e.target);
			router.navigate($li.attr("data-url"), { trigger: true});
	}

});
