//Passing a Collection to a View

var Song = Backbone.Model.extend({

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongView = Backbone.View.extend({
	tagName: "li"

	render: function() {
			this.$el.html(this.model.get("title"));
			this.$el.attr("id", this.model.id);

			return this;

	}

});

var SongsView = Backbone.View.extend({

		tagName: "ul",

		initialize: function(){

			this.model.on("add", this.onSongAdded, this);
			this.model.on("remove", this.onSongRemoved, this);
		},

		// onSongAdded: function(){

		// 	console.log("Song Added");
		// },

		onSongAdded: function(song){
			var songView = new SongView({ model: song });

			this.$el.append(songView.render().$el);
		},

		// onSongRemoved: function(){
		// 	console.log("Song removed");
		// },

		onSongRemoved: function(song){
			// this.$el.find("li#" + song.id).remove();
		
			this.$("li#" + song.id).remove();
		},


		render: function(){
				var self = this;

				this.model.each(function(song){
						var songView = new SongView({ model: song});
						self.$el.append(songView.render().$el);
				});

		}
});

// var songs = new Songs([
// 	new Song({title: "Blue in Green"}),
// 	new Song({title: "So What"}),
// 	new Song({title: "All Blues"})

// ]);

var songs = new songs({
	new Song({ id: 1, title: "Blue in Green"}),
	new Song({ id: 2, title: "So What"}),
	new Song({ id: 3, title: "All Blues"}),
});


var songsView = new SongView({ el: "#songs", model: songs });
songView.render();