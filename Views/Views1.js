var SongView = Backbone.View.extend({ //similar to creating models and collections
	render: function(){ //implement rendering logic
			this.$el.html("Hello World"); //this.$el is a case jquery object that contains the view's DOM element

			return this;

	}

});

var SongView = new SongView({ el: "#container"});
songView.render();

$("#container").html(songView.$el);